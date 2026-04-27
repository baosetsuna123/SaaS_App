import CompanionForm from "@/components/CompanionForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { newCompanionPermissions } from "@/lib/actions/companion.actions";
import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";

const NewCompanion = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const canCreateCompanion = await newCompanionPermissions();

  return (
    <main className="w-full flex justify-center px-4 py-10">
      <div className="w-full max-w-3xl mx-auto">
        {canCreateCompanion ? (
          <article className="flex flex-col gap-6">
            {/* HEADER */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#fe5933] via-[#ff7a5c] to-[#ff9d85] p-8 text-white shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Companion Builder</h1>
                  <p className="text-white/80 mt-1">
                    Create your personalized AI learning partner
                  </p>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="bg-white rounded-2xl shadow-lg border p-6">
              <CompanionForm />
            </div>
          </article>
        ) : (
          <article className="companion-limit">
            <Image
              src="/images/limit.svg"
              alt="Companion limit reached"
              width={360}
              height={230}
            />
            <div className="cta-badge">Upgrade your plan</div>
            <h1>You’ve Reached Your Limit</h1>
            <p>
              You’ve reached your companion limit. Upgrade to create more
              companions and premium features.
            </p>
            <Link
              href="/subscription"
              className="btn-primary w-full justify-center"
            >
              Upgrade My Plan
            </Link>
          </article>
        )}
      </div>
    </main>
  );
};

export default NewCompanion;
