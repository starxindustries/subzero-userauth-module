import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  CheckCircle,
  Shield,
  Palette,
  Code,
  ArrowRight,
  Terminal,
  Users,
  Settings,
  Eye,
  FileText,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { ThemeSwitcher } from "@/components/theme-switcher"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          <Link className="flex items-center justify-center" href="#">
            <Terminal className="h-6 w-6 mr-2 text-primary" />
            <span className="font-bold">Your Project</span>
            <Badge variant="secondary" className="ml-2">
              Auth Enabled
            </Badge>
          </Link>
          <nav className="flex gap-4 sm:gap-6 justify-center items-center">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/auth/login">
              Login
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/auth/signup">
              Sign Up
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/docs">
              Docs
            </Link>
            <div className="flex items-center justify-center">
              <ThemeSwitcher />
            </div>
          </nav>
        </div>
      </header>

      <main className="flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-6 text-center">
              <Alert className="max-w-2xl border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                <AlertDescription className="text-green-800 dark:text-green-200">
                  <strong>Success!</strong> Auth module has been added to your project. Your authentication system is
                  ready to use.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Your
                  <span className="text-primary"> Auth-Enabled</span> Project
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Your project now includes a complete authentication system with login, signup, password reset,
                  theming, and beautiful shadcn/ui components. Everything is configured and ready to use.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/auth/login">
                    <Shield className="w-4 h-4 mr-2" />
                    Try Login Page
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/auth/signup">
                    <Users className="w-4 h-4 mr-2" />
                    Try Signup Page
                  </Link>
                </Button>
              </div>

              {/* Installation Summary */}
              <div className="w-full max-w-4xl mt-8 mx-auto">
                <Card className="bg-muted/50">
                  <CardHeader className="text-center">
                    <CardTitle className="flex items-center justify-center">
                      <Terminal className="w-5 h-5 mr-2" />
                      What Was Installed
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-center md:text-left">Authentication Pages</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li className="flex items-center justify-center md:justify-start">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                          /login - Login form
                        </li>
                        <li className="flex items-center justify-center md:justify-start">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                          /signup - Registration form
                        </li>
                        <li className="flex items-center justify-center md:justify-start">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                          /forgot-password - Password reset
                        </li>
                        <li className="flex items-center justify-center md:justify-start">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                          /reset-password - New password form
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-center md:text-left">Components & Features</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li className="flex items-center justify-center md:justify-start">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                          Theme provider (dark/light mode)
                        </li>
                        <li className="flex items-center justify-center md:justify-start">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                          shadcn/ui components
                        </li>
                        <li className="flex items-center justify-center md:justify-start">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                          Form validation
                        </li>
                        <li className="flex items-center justify-center md:justify-start">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                          Toast notifications
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Your New Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Your project now includes everything you need for user authentication. Here's what you can do right
                  now.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12 justify-items-center">
              <Card className="relative overflow-hidden w-full">
                <CardHeader className="text-center">
                  <div className="flex justify-center">
                    <Shield className="h-10 w-10 text-primary mb-2" />
                  </div>
                  <CardTitle>Authentication System</CardTitle>
                  <CardDescription>
                    Complete user authentication with secure login, registration, and password management.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-center bg-transparent" asChild>
                      <Link href="/auth/login">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        View Login Page
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-center bg-transparent" asChild>
                      <Link href="/auth/signup">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        View Signup Page
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-center bg-transparent" asChild>
                      <Link href="/auth/forgot-password">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Password Reset
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden w-full">
                <CardHeader className="text-center">
                  <div className="flex justify-center">
                    <Palette className="h-10 w-10 text-primary mb-2" />
                  </div>
                  <CardTitle>Theme System</CardTitle>
                  <CardDescription>
                    Built-in dark and light mode support with customizable themes using CSS variables.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="text-sm">Current Theme</span>
                    <ThemeSwitcher />
                  </div>
                  <div className="text-sm text-muted-foreground text-center">
                    Theme switching is automatically available on all auth pages with persistent user preference.
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden w-full">
                <CardHeader className="text-center">
                  <div className="flex justify-center">
                    <Code className="h-10 w-10 text-primary mb-2" />
                  </div>
                  <CardTitle>UI Components</CardTitle>
                  <CardDescription>
                    Pre-built shadcn/ui components with consistent styling and accessibility features.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2 justify-center">
                    <Button variant="outline" size="sm">
                      Button
                    </Button>
                    <Button variant="secondary" size="sm">
                      Secondary
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground text-center">
                    All components follow your theme and are fully accessible with proper ARIA labels.
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Next Steps Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What's Next?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Now that your auth system is set up, here are some recommended next steps to enhance your project.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 max-w-5xl mx-auto mt-12 justify-items-center">
              <Card className="w-full">
                <CardHeader className="text-center">
                  <div className="flex justify-center">
                    <Eye className="h-8 w-8 text-primary mb-2" />
                  </div>
                  <CardTitle>Test Your Auth Flow</CardTitle>
                  <CardDescription>Try creating an account and logging in to see everything in action.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" asChild>
                    <Link href="/signup">
                      Start Testing
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="w-full">
                <CardHeader className="text-center">
                  <div className="flex justify-center">
                    <Settings className="h-8 w-8 text-primary mb-2" />
                  </div>
                  <CardTitle>Customize Your Setup</CardTitle>
                  <CardDescription>
                    Modify colors, add your branding, and customize the auth flow to match your needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Customization Guide
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="w-full">
                <CardHeader className="text-center">
                  <div className="flex justify-center">
                    <Zap className="h-8 w-8 text-primary mb-2" />
                  </div>
                  <CardTitle>Add More Modules</CardTitle>
                  <CardDescription>
                    Explore other subzero-cli modules like database, API routes, or dashboard components.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent">
                    Browse Modules
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Quick Commands */}
            <div className="max-w-3xl mx-auto mt-12">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center">
                    <Terminal className="w-5 h-5 mr-2" />
                    Quick Commands
                  </CardTitle>
                  <CardDescription>Useful commands to continue building your project</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="font-mono text-sm bg-muted p-4 rounded-lg space-y-2">
                    <div className="text-muted-foreground"># Add database module</div>
                    <div>npx subzero-cli add database</div>

                    <div className="text-muted-foreground mt-4"># Add dashboard components</div>
                    <div>npx subzero-cli add dashboard</div>

                    <div className="text-muted-foreground mt-4"># View all available modules</div>
                    <div>npx subzero-cli list</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Need Help?</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  We're here to help you get the most out of your new authentication system.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" asChild>
                  <Link href="/docs">
                    <FileText className="w-4 h-4 mr-2" />
                    Read Documentation
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="https://github.com/subzero-cli/subzero-cli">
                    <Code className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-2 sm:flex-row items-center">
          <p className="text-xs text-muted-foreground">© 2024 Your Project. Powered by subzero-cli.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="/privacy">
              Privacy
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="/terms">
              Terms
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="https://github.com/subzero-cli/subzero-cli"
            >
              GitHub
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}