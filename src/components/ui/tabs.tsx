"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn(
        "flex flex-col gap-2 items-center justify-center",
        className
      )}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "inline-flex items-center justify-center rounded-xl bg-gray-100 px-2 py-1 border border-gray-200 shadow-lg gap-2 mx-auto",
        "mb-2",
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "transition-all px-5 py-2 text-base sm:text-lg font-semibold focus-visible:outline-none",
        "data-[state=active]:bg-white data-[state=active]:text-vital-dark-gray data-[state=active]:shadow-lg data-[state=active]:border-b-4 data-[state=active]:border-vital-blue",
        "data-[state=inactive]:text-gray-400 data-[state=inactive]:bg-transparent hover:text-vital-dark-gray hover:bg-white/70",
        "rounded-lg min-w-[120px] text-center",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
