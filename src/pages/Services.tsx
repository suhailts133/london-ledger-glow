
import { useState } from "react";
import { ChevronDown, Calculator, FileText, TrendingUp, Shield, Users, PiggyBank } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Bookkeeping & Accounting",
      description: "Professional bookkeeping services to keep your finances organized",
      icon: Calculator,
      details: "Our comprehensive bookkeeping services include daily transaction recording, bank reconciliation, accounts payable and receivable management, and monthly financial reporting. We use cloud-based accounting software to ensure your books are always up-to-date and accessible."
    },
    {
      id: 2,
      title: "Tax Planning & Preparation",
      description: "Strategic tax planning to minimize your tax liability",
      icon: FileText,
      details: "We provide expert tax preparation for individuals and businesses, including corporation tax, VAT returns, self-assessment, and payroll taxes. Our proactive approach helps identify tax-saving opportunities throughout the year."
    },
    {
      id: 3,
      title: "Financial Consulting",
      description: "Expert advice to help your business grow and prosper",
      icon: TrendingUp,
      details: "Our financial consulting services include cash flow analysis, budgeting and forecasting, business planning, and strategic financial advice. We help you make informed decisions to drive your business forward."
    },
    {
      id: 4,
      title: "Audit & Assurance",
      description: "Independent audit services for transparency and compliance",
      icon: Shield,
      details: "We provide statutory audits, internal audits, and assurance services to ensure your financial statements are accurate and compliant with regulations. Our thorough approach gives stakeholders confidence in your financial reporting."
    },
    {
      id: 5,
      title: "Payroll Services",
      description: "Complete payroll management for your employees",
      icon: Users,
      details: "Our payroll services include salary processing, PAYE and National Insurance calculations, pension contributions, and RTI submissions to HMRC. We ensure your payroll is accurate and compliant."
    },
    {
      id: 6,
      title: "Business Advisory",
      description: "Strategic guidance for business growth and efficiency",
      icon: PiggyBank,
      details: "We offer comprehensive business advisory services including business structure optimization, merger and acquisition support, performance improvement, and succession planning to help your business thrive."
    }
  ];

  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive accounting solutions designed to support your business at every stage of growth
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-between p-0 h-auto"
                        onClick={() => toggleItem(service.id)}
                      >
                        <span className="text-primary font-medium">Read More</span>
                        <ChevronDown 
                          className={`w-4 h-4 text-primary transition-transform ${
                            openItems.includes(service.id) ? 'rotate-180' : ''
                          }`} 
                        />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {service.details}
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contact us today for a free consultation and discover how we can help your business thrive.
            </p>
            <Button size="lg" className="px-8 py-6 text-lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
