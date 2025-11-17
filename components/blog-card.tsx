"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
  href: string;
  className?: string;
  delay?: number;
}

export function BlogCard({
  title,
  description,
  category,
  date,
  readTime,
  image,
  href,
  className = "",
  delay = 0,
}: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn("h-full", className)}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 overflow-hidden group">
        {image && (
          <div className="relative h-48 w-full overflow-hidden bg-gradient-achilles-soft">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-xs font-semibold text-white bg-achilles-blue rounded-full">
                {category}
              </span>
            </div>
          </div>
        )}
        <CardHeader>
          {!image && (
            <div className="mb-2">
              <span className="px-3 py-1 text-xs font-semibold text-achilles-blue bg-achilles-blue-lighter/30 rounded-full">
                {category}
              </span>
            </div>
          )}
          <CardTitle className="text-xl group-hover:text-achilles-blue transition-colors">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base mb-4 text-gray-600 line-clamp-2">
            {description}
          </CardDescription>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {readTime}
            </div>
          </div>
          <Button variant="ghost" asChild className="p-0 group/btn">
            <Link href={href} className="flex items-center gap-2">
              Read article
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

