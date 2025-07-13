
import { useState } from "react";
import { ChevronDown, Calculator, FileText, TrendingUp, Shield, Users, PiggyBank, Award, Clock, MapPin, Mail, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const [openServices, setOpenServices] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

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

  const services = [
    {
      id: 1,
      title: "Company Accounts Production and Filing",
      description: "Complete year-end accounts and HMRC compliance services",
      icon: Calculator,
      details: "Do you require assistance with your year-end accounts? We can take care of submitting your year-end accounts to HMRC and Companies House on your behalf. It is mandatory for limited companies to submit these accounts, and failing to do so can result in significant fines if the firm is not in compliance with the law. Furthermore, with the implementation of the Making Tax Digital regulations in 2023, it is even more critical that you maintain precise digital records of your transactions. You will be able to comply with the law if you have our assistance. We are best known for our all-inclusive unlimited service plan, which includes all accounting services required by a UK business and more for a fixed monthly fee. Furthermore, when you sign up for our all-inclusive service, we will give you a 50 percent discount on any existing company accounts you may have."
    },
    {
      id: 2,
      title: "Self Assessment Tax Returns",
      description: "Expert handling of your Self Assessment submissions and HMRC compliance",
      icon: FileText,
      details: "Filing your Self Assessment tax return can be confusing, especially with the ever-changing HMRC guidelines and deadlines. Our expert accountants will take care of the entire process, from registering with HMRC (if needed) to preparing and submitting your return accurately and on time. We ensure that all income sources are accounted for, and we'll work to minimise your tax liability wherever possible. Whether you're a sole trader, landlord, company director, or have additional income to report, we'll handle everything for you—eliminating the stress and potential penalties of incorrect or late submissions. We are best known for our all-inclusive unlimited service plan, which includes all accounting services required by a UK business and more for a fixed monthly fee. Furthermore, when you sign up for our all-inclusive service, we will give you a 50 percent discount on any outstanding Self Assessment returns you may have."
    },
    {
      id: 3,
      title: "Expert Bookkeeping Services",
      description: "Comprehensive managed bookkeeping solutions for your business",
      icon: TrendingUp,
      details: "Bookkeeping is a time-consuming task for every business owner, and getting behind is a common occurrence. With our managed bookkeeping solution, you can avoid hours of catching up on work. Our accountants will take care of this vital part of your business, freeing up your time so that you can devote your attention to the things that matter the most. We are best known for our all-inclusive unlimited service plan, which includes all accounting services required by a UK business and more for a fixed monthly fee. Furthermore, when you sign up for our all-inclusive service, we will give you a 50 percent discount on any outstanding bookkeeping you may have."
    },
    {
      id: 4,
      title: "VAT Accountants",
      description: "Professional VAT calculation, reporting and compliance services",
      icon: Shield,
      details: "The procedure of calculating and reporting VAT is complicated and time-consuming. Our accountants will take care of the filing of your VAT returns. Every aspect of your VAT return will be handled by our experts, from ensuring that you are on the correct scheme to ensuring that everything is properly accounted for. You may rest assured that your returns will be submitted on time if you use More Than Accountants. We are best known for our all-inclusive unlimited service plan, which includes all accounting services required by a UK business and more for a fixed monthly fee. Furthermore, when you sign up for our all-inclusive service, we will give you a 50 percent discount on any existing VAT returns you may have."
    },
    {
      id: 5,
      title: "Managed Payroll Service",
      description: "Complete payroll management and HMRC reporting services",
      icon: Users,
      details: "The ability to keep track of payroll is critical – and nothing irritates employees more than an error or a delay in the delivery of pay slips. You can rely on our outsourced payroll solution to ensure that your employees are paid on time as well as that their national insurance and pension payments are calculated correctly. We'll tell you who and what to pay, present you with payslips, and file your HMRC reports on your behalf. We handle all aspects of a company's payroll, providing the most comprehensive service available. We are best known for our all-inclusive unlimited service plan, which includes all accounting services required by a UK business and more for a fixed monthly fee. Furthermore, when you sign up for our all-inclusive service, we will give you a 50 percent discount on any outstanding Payroll responsibilities you may have."
    },
    {
      id: 6,
      title: "Critical Management Information",
      description: "Strategic financial reporting and business guidance",
      icon: PiggyBank,
      details: "The majority of small business owners are passionate about their product or service – not about managing their accounts and bookkeeping procedures. Concentrate on the activities that you find enjoyable while leaving the complicated process of handling taxes and accounts to us. Our professionals will stay on top of this difficult component of running a business so that you don't have to worry about it. Your monthly or quarterly Profit & Loss Account and Balance Sheet will be prepared by us. In addition to providing you with personalised guidance, your experienced Accountant will also provide you with tax estimations."
    },
    {
      id: 7,
      title: "Tax Returns for Companies and Individuals",
      description: "Comprehensive tax return services for all business types",
      icon: Award,
      details: "Managing your finances as a company or self-employed individual can be difficult enough without having to worry about filing self-assessment tax returns on top of everything else. You may find the process of submitting a tax return to be excessively complicated, or you may not want to devote the necessary time and attention to the task. The experts at More Than Accountants can take care of your self-assessment accounts and company tax requirements, ensuring that you do not incur any penalties or fines as a result of any mistakes or delays. We are best known for our all-inclusive unlimited service plan, which includes all accounting services required by a UK business and more for a fixed monthly fee. Furthermore, when you sign up for our all-inclusive service, we will give you a 50 percent discount on any existing tax returns you may have."
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
    <div className="min-h-screen animate-page-transition">
      <Navigation />
      
      {/* Hero Section with Enhanced Animations */}
      <div 
        id="home"
        className="min-h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-8 h-8 bg-primary/20 rounded-full animate-background-particles"></div>
          <div className="absolute top-40 right-32 w-6 h-6 bg-accent/30 rounded-full animate-background-particles stagger-2"></div>
          <div className="absolute bottom-32 left-1/4 w-10 h-10 bg-secondary/25 rounded-full animate-background-particles stagger-3"></div>
          <div className="absolute bottom-20 right-20 w-12 h-12 bg-primary/15 rounded-full animate-background-particles stagger-4"></div>
        </div>

        {/* Overlay with floating gradient */}
        <div className="absolute inset-0 bg-primary/30 animate-floating-gradient opacity-80"></div>
        
        {/* Hero Content */}
        <div className="relative z-40 flex items-center min-h-screen px-6 pt-20">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-hero-text-reveal">
                Expert Accounting
                <br />
                <span className="text-accent animate-hero-glow">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed animate-text-wave-entrance stagger-2">
                Navigate London's financial landscape with confidence. Professional accounting services tailored for your business success.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow hover-glow">
          <ChevronDown className="text-white w-8 h-8 hover-spin" />
        </div>
      </div>

      {/* Services Section with Cool Pop-up Cards */}
      <section id="services" className="py-20 bg-background relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 animate-floating-gradient"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full animate-background-particles"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent/10 rounded-full animate-background-particles stagger-3"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-hero-text-reveal">
              Our <span className="text-primary animate-text-shimmer">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-text-wave-entrance stagger-1">
              Comprehensive accounting solutions designed to support your business at every stage of growth
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className={`hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 hover:scale-[1.02] animate-card-pop-entrance hover-lift bg-card/90 backdrop-blur-sm border-l-4 border-l-primary relative group overflow-hidden stagger-${index + 1}`}
              >
                {/* Enhanced animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-floating-gradient"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-start gap-6 mb-4">
                    <div className="p-4 bg-primary/10 rounded-xl transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3 animate-icon-spin-pop hover-glow stagger-1">
                      <service.icon className="w-8 h-8 text-primary transition-all duration-300 group-hover:scale-110 hover-spin" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl md:text-3xl hover:text-primary transition-colors duration-300 mb-2 group-hover:translate-x-2 animate-text-wave-entrance stagger-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-300 animate-text-wave-entrance stagger-3">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-between p-4 h-auto hover:bg-primary/10 transition-all duration-500 group/btn border border-primary/20 rounded-lg hover:border-primary/40 animate-button-magnetic hover-lift"
                        onClick={() => toggleService(service.id)}
                      >
                        <span className="text-primary font-semibold text-lg group-hover/btn:translate-x-2 transition-transform duration-300">
                          Read More Details
                        </span>
                        <ChevronDown 
                          className={`w-5 h-5 text-primary transition-all duration-500 group-hover/btn:scale-110 hover-spin ${
                            openServices.includes(service.id) ? 'rotate-180' : ''
                          }`} 
                        />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-6 animate-expand-content">
                      <div className="bg-secondary/20 p-6 rounded-lg border-l-2 border-primary/30 hover-glow">
                        <p className="text-muted-foreground leading-relaxed text-base animate-text-reveal">
                          {service.details}
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 bg-secondary/30 relative overflow-hidden">
        {/* Enhanced floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-background-particles"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/10 rounded-full animate-background-particles stagger-2"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-secondary/15 rounded-full animate-background-particles stagger-4"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-hero-text-reveal">
              About <span className="text-primary animate-text-shimmer">Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-text-wave-entrance stagger-1">
              Trusted accounting professionals serving London businesses for over a decade
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="animate-contact-form-slide">
              <h3 className="text-3xl font-bold text-foreground mb-6 animate-text-wave-entrance">
                Your Trusted Financial Partners
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="hover:text-foreground transition-colors duration-500 animate-text-wave-entrance stagger-1 hover-lift">
                  Founded in the heart of London, LondonAccounts has been providing exceptional 
                  accounting services to businesses across the capital for over fifteen years. 
                  Our team of qualified accountants and financial advisors are committed to 
                  helping your business navigate the complex world of finance with confidence.
                </p>
                <p className="hover:text-foreground transition-colors duration-500 animate-text-wave-entrance stagger-2 hover-lift">
                  We understand that every business is unique, which is why we take the time 
                  to understand your specific needs and goals. From startups to established 
                  enterprises, we provide tailored solutions that drive growth and ensure 
                  compliance with all regulatory requirements.
                </p>
              </div>
            </div>
            <div className="animate-content-slide-left">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80"
                alt="Modern office space"
                className="rounded-lg shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:rotate-1 animate-image-reveal hover-glow"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label} 
                className={`text-center hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 hover:scale-110 animate-stats-counter-pop hover-lift bg-card/90 backdrop-blur-sm group stagger-${index + 1}`}
              >
                <CardContent className="p-8">
                  <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 animate-icon-spin-pop hover-glow stagger-1">
                    <stat.icon className="w-8 h-8 text-primary transition-all duration-300 group-hover:scale-110 hover-spin" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-500 animate-text-wave-entrance stagger-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 animate-text-wave-entrance stagger-3">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-background relative overflow-hidden">
        {/* Enhanced background elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 animate-floating-gradient"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-primary/10 rounded-full animate-background-particles"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-accent/10 rounded-full animate-background-particles stagger-3"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-hero-text-reveal">
              Contact <span className="text-primary animate-text-shimmer">Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-text-wave-entrance stagger-1">
              Ready to take your business finances to the next level? Get in touch with our expert team today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div className="animate-contact-form-slide">
              <Card className="hover:shadow-2xl transition-all duration-700 bg-card/90 backdrop-blur-sm group hover:scale-105 hover-glow animate-card-pop-entrance">
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300 animate-text-wave-entrance">
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="animate-text-wave-entrance stagger-1">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2 transition-all duration-500 hover:border-primary focus:scale-105 hover:shadow-lg hover-glow"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="animate-text-wave-entrance stagger-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2 transition-all duration-500 hover:border-primary focus:scale-105 hover:shadow-lg hover-glow"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="animate-text-wave-entrance stagger-3">
                      <Label htmlFor="message">Message</Label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="mt-2 w-full px-3 py-2 border border-input bg-background rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all duration-500 hover:border-primary focus:scale-105 hover:shadow-lg hover-glow"
                        placeholder="Tell us about your accounting needs..."
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full hover:scale-105 transition-all duration-500 animate-button-magnetic hover-glow">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6 animate-contact-cards-slide">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title} 
                  className={`hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:scale-105 bg-card/90 backdrop-blur-sm group animate-card-pop-entrance hover-lift stagger-${index + 1}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 animate-icon-spin-pop hover-glow stagger-${index + 1}`}>
                        <info.icon className="w-6 h-6 text-primary transition-all duration-300 group-hover:scale-110 hover-spin" />
                      </div>
                      <div className="group-hover:translate-x-2 transition-transform duration-300">
                        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300 animate-text-wave-entrance stagger-1">
                          {info.title}
                        </h3>
                        <p className="text-foreground mb-1 animate-text-wave-entrance stagger-2">
                          {info.details}
                        </p>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 animate-text-wave-entrance stagger-3">
                          {info.subtext}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Google Maps Section */}
          <div className="animate-card-pop-entrance stagger-7">
            <Card className="hover:shadow-2xl transition-all duration-700 bg-card/90 backdrop-blur-sm group hover:scale-[1.02] hover-glow">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden relative group">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2779487314143!2d-0.08919308423022394!3d51.51345897963616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603464461a401%3A0xa13f1f7f8b094228!2sBank%2C%20London!5e0!3m2!1sen!2suk!4v1634567890123!5m2!1sen!2suk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location - Bank, London"
                    className="hover:grayscale-0 grayscale-[0.3] transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none animate-floating-gradient"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
