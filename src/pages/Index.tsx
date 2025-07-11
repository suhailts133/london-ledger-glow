
import { useState } from "react";
import { Menu, X, ChevronDown, Calculator, FileText, TrendingUp, Shield, Users, PiggyBank, Award, Clock, MapPin, Mail, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openServices, setOpenServices] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleService = (id: number) => {
    setOpenServices(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

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

  const stats = [
    { icon: Award, label: "Years of Experience", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Clock, label: "Hours Saved Annually", value: "10,000+" },
    { icon: MapPin, label: "London Locations", value: "3" }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+44 20 7123 4567",
      subtext: "Mon-Fri 9AM-6PM"
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@londonaccounts.co.uk",
      subtext: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Financial District, London EC2V 8RF",
      subtext: "Near Bank Station"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM",
      subtext: "Weekend consultations available"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with London Background */}
      <div 
        id="home"
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/30"></div>
        
        {/* Navigation */}
        <nav className="relative z-50 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="text-white font-bold text-2xl">
              London<span className="text-accent">Accounts</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-accent transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-accent transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-accent transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-accent transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm">
              <div className="px-6 py-4 space-y-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block text-white hover:text-accent transition-colors w-full text-left"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block text-white hover:text-accent transition-colors w-full text-left"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block text-white hover:text-accent transition-colors w-full text-left"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block text-white hover:text-accent transition-colors w-full text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Content */}
        <div className="relative z-40 flex items-center min-h-[calc(100vh-80px)] px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl text-left animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Expert Accounting
                <br />
                <span className="text-accent">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Navigate London's financial landscape with confidence. Professional accounting services tailored for your business success.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white w-8 h-8" />
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive accounting solutions designed to support your business at every stage of growth
            </p>
          </div>

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
                        onClick={() => toggleService(service.id)}
                      >
                        <span className="text-primary font-medium">Read More</span>
                        <ChevronDown 
                          className={`w-4 h-4 text-primary transition-transform ${
                            openServices.includes(service.id) ? 'rotate-180' : ''
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
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="text-primary">Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted accounting professionals serving London businesses for over a decade
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Your Trusted Financial Partners
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in the heart of London, LondonAccounts has been providing exceptional 
                  accounting services to businesses across the capital for over fifteen years. 
                  Our team of qualified accountants and financial advisors are committed to 
                  helping your business navigate the complex world of finance with confidence.
                </p>
                <p>
                  We understand that every business is unique, which is why we take the time 
                  to understand your specific needs and goals. From startups to established 
                  enterprises, we provide tailored solutions that drive growth and ensure 
                  compliance with all regulatory requirements.
                </p>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80"
                alt="Modern office space"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label} 
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Contact <span className="text-primary">Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to take your business finances to the next level? Get in touch with our expert team today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="mt-2 w-full px-3 py-2 border border-input bg-background rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        placeholder="Tell us about your accounting needs..."
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title} 
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        <p className="text-foreground mb-1">
                          {info.details}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.subtext}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
