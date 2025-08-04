import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { FirecrawlService } from '@/utils/FirecrawlService';
import ScrollReveal from './ScrollReveal';

interface ScrapedData {
  markdown?: string;
  html?: string;
  metadata?: {
    title?: string;
    description?: string;
    keywords?: string;
    author?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
  };
  llm_extraction?: any;
}

const WebsiteAnalyzer = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState(FirecrawlService.getApiKey() || '');
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrapedData, setScrapedData] = useState<ScrapedData | null>(null);
  const [activeTab, setActiveTab] = useState('setup');

  const handleSaveApiKey = async () => {
    if (!apiKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter your Firecrawl API key",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    const isValid = await FirecrawlService.testApiKey(apiKey);
    
    if (isValid) {
      FirecrawlService.saveApiKey(apiKey);
      toast({
        title: "Success",
        description: "API key saved and validated successfully",
      });
      setActiveTab('analyzer');
    } else {
      toast({
        title: "Error",
        description: "Invalid API key. Please check and try again.",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  const handleScrapeWebsite = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setProgress(0);
    setScrapedData(null);
    
    try {
      const apiKey = FirecrawlService.getApiKey();
      if (!apiKey) {
        toast({
          title: "Error",
          description: "Please set your API key first",
          variant: "destructive",
        });
        setActiveTab('setup');
        return;
      }

      setProgress(25);
      console.log('Starting scrape for URL:', url);
      const result = await FirecrawlService.scrapeWebsite(url);
      setProgress(75);
      
      if (result.success) {
        setProgress(100);
        toast({
          title: "Success",
          description: "Website analyzed successfully",
        });
        setScrapedData(result.data);
        setActiveTab('results');
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to analyze website",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error scraping website:', error);
      toast({
        title: "Error",
        description: "Failed to analyze website",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setProgress(100);
    }
  };

  const generateReactCode = () => {
    if (!scrapedData || !scrapedData.metadata) return '';

    const { title, description } = scrapedData.metadata;
    
    return `import React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            ${title || 'Website Title'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ${description || 'Website description goes here...'}
          </p>
        </div>
        
        {/* Add your content here based on the scraped data */}
        <div className="prose prose-lg mx-auto">
          {/* Content extracted from the website */}
        </div>
      </div>
    </div>
  );
};

export default GeneratedComponent;`;
  };

  return (
    <section id="tools" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Website Analyzer</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Analyze any website and extract its content, structure, and generate React code
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-4xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="setup">Setup</TabsTrigger>
                <TabsTrigger value="analyzer">Analyzer</TabsTrigger>
                <TabsTrigger value="results" disabled={!scrapedData}>Results</TabsTrigger>
              </TabsList>

              <TabsContent value="setup">
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">API Setup</h3>
                      <p className="text-muted-foreground mb-6">
                        You need a Firecrawl API key to analyze websites. Get yours at{' '}
                        <a href="https://firecrawl.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          firecrawl.dev
                        </a>
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Firecrawl API Key</label>
                        <Input
                          type="password"
                          value={apiKey}
                          onChange={(e) => setApiKey(e.target.value)}
                          placeholder="fc-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                          className="bg-background/50 border-border/50 focus:border-primary/50"
                        />
                      </div>
                      
                      <Button
                        onClick={handleSaveApiKey}
                        disabled={isLoading || !apiKey.trim()}
                        className="w-full bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform duration-300"
                      >
                        {isLoading ? "Validating..." : "Save & Validate API Key"}
                      </Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="analyzer">
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
                  <form onSubmit={handleScrapeWebsite} className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">Website Analysis</h3>
                      <p className="text-muted-foreground mb-6">
                        Enter any website URL to analyze its content and structure
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Website URL</label>
                        <Input
                          type="url"
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                          placeholder="https://example.com"
                          className="bg-background/50 border-border/50 focus:border-primary/50"
                          required
                        />
                      </div>
                      
                      {isLoading && (
                        <div className="space-y-2">
                          <Progress value={progress} className="w-full" />
                          <p className="text-sm text-muted-foreground text-center">
                            Analyzing website...
                          </p>
                        </div>
                      )}
                      
                      <Button
                        type="submit"
                        disabled={isLoading || !url.trim()}
                        className="w-full bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform duration-300"
                      >
                        {isLoading ? "Analyzing..." : "Analyze Website"}
                      </Button>
                    </div>
                  </form>
                </Card>
              </TabsContent>

              <TabsContent value="results">
                {scrapedData && (
                  <div className="space-y-6">
                    {/* Metadata Card */}
                    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                      <h3 className="text-xl font-semibold mb-4">Website Metadata</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Title</p>
                          <p className="text-foreground">{scrapedData.metadata?.title || 'N/A'}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Description</p>
                          <p className="text-foreground line-clamp-2">{scrapedData.metadata?.description || 'N/A'}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Author</p>
                          <p className="text-foreground">{scrapedData.metadata?.author || 'N/A'}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Keywords</p>
                          <p className="text-foreground line-clamp-2">{scrapedData.metadata?.keywords || 'N/A'}</p>
                        </div>
                      </div>
                    </Card>

                    {/* Content Tabs */}
                    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                      <Tabs defaultValue="markdown" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="markdown">Markdown</TabsTrigger>
                          <TabsTrigger value="html">HTML</TabsTrigger>
                          <TabsTrigger value="react">React Code</TabsTrigger>
                        </TabsList>

                        <TabsContent value="markdown" className="mt-6">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <h4 className="text-lg font-semibold">Extracted Markdown</h4>
                              <Badge variant="secondary">Content</Badge>
                            </div>
                            <Textarea
                              value={scrapedData.markdown || 'No markdown content available'}
                              readOnly
                              className="min-h-[400px] bg-background/50 border-border/50 font-mono text-sm"
                            />
                          </div>
                        </TabsContent>

                        <TabsContent value="html" className="mt-6">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <h4 className="text-lg font-semibold">Extracted HTML</h4>
                              <Badge variant="secondary">Structure</Badge>
                            </div>
                            <Textarea
                              value={scrapedData.html || 'No HTML content available'}
                              readOnly
                              className="min-h-[400px] bg-background/50 border-border/50 font-mono text-sm"
                            />
                          </div>
                        </TabsContent>

                        <TabsContent value="react" className="mt-6">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <h4 className="text-lg font-semibold">Generated React Component</h4>
                              <Badge variant="secondary">Code</Badge>
                            </div>
                            <Textarea
                              value={generateReactCode()}
                              readOnly
                              className="min-h-[400px] bg-background/50 border-border/50 font-mono text-sm"
                            />
                            <p className="text-sm text-muted-foreground">
                              This is a basic React component template based on the scraped metadata. 
                              You can customize it further based on the extracted content.
                            </p>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </Card>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WebsiteAnalyzer;