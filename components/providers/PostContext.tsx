"use client";

import { createContext, useContext } from "react";

type PostContextType = {
  slug: string;
};

const PostContext = createContext<PostContextType | null>(null);

export function PostProvider({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  return (
    <PostContext.Provider value={{ slug }}>{children}</PostContext.Provider>
  );
}

export function usePost() {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error("usePost must be used within PostProvider");
  }

  return context;
}
