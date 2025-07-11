
import { Award, Users, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const stats = [
    { icon: Award, label: "Years of Experience", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Clock, label: "Hours Saved Annually", value: "10,000+" },
    { icon: MapPin, label: "London Locations", value: "3" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted accounting professionals serving London businesses for over a decade
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Your Trusted Financial Partners
              </h2>
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
                <p>
                  Our commitment to excellence, combined with cutting-edge technology and 
                  personalized service, makes us the preferred choice for businesses 
                  seeking reliable accounting support in London.
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

          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower London businesses with exceptional accounting services that 
                  simplify financial complexity, ensure compliance, and drive sustainable 
                  growth. We are committed to building lasting partnerships based on trust, 
                  expertise, and unwavering dedication to our clients' success.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be London's most trusted accounting firm, recognized for our innovative 
                  approach, exceptional service quality, and positive impact on the business 
                  community. We envision a future where every business has access to 
                  world-class financial guidance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
