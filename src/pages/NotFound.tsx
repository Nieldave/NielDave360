import { Link } from "react-router-dom";
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6 animate-fade-in">
        <h1 className="text-8xl font-heading font-bold gradient-text">404</h1>
        <h2 className="text-3xl font-heading font-semibold">Page Not Found</h2>
        <p className="text-xl text-muted-foreground max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium shadow-glow hover:shadow-glow-lg transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
