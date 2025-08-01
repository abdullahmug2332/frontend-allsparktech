import React from 'react'
import BlogData from "@/components/BlogData"

export async function generateMetadata() {
  return {
    title: "All Spark Tech Blog | Software, AI, Cloud & Marketing Insights",
    description:
      "Explore the All Spark Technologies Blog for expert tips on custom software, AI, cloud solutions, DevOps, and digital marketing to grow your business.",
  };
}


export default function page() {
  return (
    <>
      <BlogData />
    </>
  )
}
