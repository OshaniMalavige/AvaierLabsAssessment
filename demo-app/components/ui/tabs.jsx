"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
                className,
                ...props
              }) {
  return (
      <TabsPrimitive.Root
          data-slot="tabs"
          className={cn("flex flex-col gap-2", className)}
          {...props} />
  );
}

function TabsList({
                    className,
                    ...props
                  }) {
  return (
      <TabsPrimitive.List
          data-slot="tabs-list"
          className={cn(
              "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
              className
          )}
          {...props} />
  );
}

function TabsTrigger({
                       className,
                       ...props
                     }) {
  return (
      <TabsPrimitive.Trigger
          data-slot="tabs-trigger"
          className={cn(
              "inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
              "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
              "border-b-2 border-transparent data-[state=active]:border-blue-500",
              className
          )}
          {...props} />
  );
}

function TabsContent({
                       className,
                       ...props
                     }) {
  return (
      <TabsPrimitive.Content
          data-slot="tabs-content"
          className={cn(
              "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              className
          )}
          {...props} />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent }