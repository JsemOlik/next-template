import { SignIn, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import { AuthLayout } from "@/components/auth-layout";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function SignInPage() {
  return (
    <AuthLayout>
      <ClerkLoading>
        <Card className="rounded-[9px] w-full max-w-[400px] border-none shadow-none bg-transparent">
          <CardHeader className="rounded-[9px] space-y-4">
            <Skeleton className="rounded-[9px] h-8 w-3/4 mx-auto" />
            <Skeleton className="rounded-[9px] h-4 w-1/2 mx-auto" />
          </CardHeader>
          <CardContent className="rounded-[9px] space-y-4">
            <div className="rounded-[9px] space-y-2">
              <Skeleton className="rounded-[9px] h-4 w-1/4" />
              <Skeleton className="rounded-[9px] h-10 w-full" />
            </div>
            <div className="rounded-[9px] space-y-2">
              <Skeleton className="rounded-[9px] h-4 w-1/4" />
              <Skeleton className="rounded-[9px] h-10 w-full" />
            </div>
            <Skeleton className="rounded-[9px] h-10 w-full mt-4" />
            <div className="rounded-[9px] flex justify-center pt-2">
              <Skeleton className="rounded-[9px] h-4 w-1/3" />
            </div>
          </CardContent>
        </Card>
      </ClerkLoading>
      <ClerkLoaded>
        <SignIn />
      </ClerkLoaded>
    </AuthLayout>
  );
}
