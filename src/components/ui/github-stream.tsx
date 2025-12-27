"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Star, GitFork, ExternalLink, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    pushed_at: string;
}

export function GithubStream() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchRepos() {
            try {
                const res = await fetch("https://api.github.com/users/AveryDoan/repos?sort=pushed&direction=desc&per_page=10");
                if (!res.ok) throw new Error("Failed to fetch");
                const data = await res.json();
                setRepos(data);
            } catch (err) {
                console.error("GitHub Fetch Error:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchRepos();
    }, []);

    if (loading) {
        return (
            <div className="flex h-64 items-center justify-center rounded-3xl border border-border bg-card/40">
                <RefreshCw className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
        );
    }

    if (error || repos.length === 0) {
        return (
            <div className="flex h-64 flex-col items-center justify-center gap-4 rounded-3xl border border-border bg-card/40 p-6 text-center">
                <Github className="h-10 w-10 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Unable to stream GitHub activity right now.</p>
            </div>
        );
    }

    return (
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/40 p-1">
            <div className="flex flex-col gap-4 p-4">
                <header className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-2">
                        <Github className="h-5 w-5" />
                        <h3 className="font-mono text-sm font-bold uppercase tracking-wider">Live Activity Stream</h3>
                    </div>
                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                </header>

                <div className="grid gap-4 sm:grid-cols-2">
                    <AnimatePresence mode="popLayout">
                        {repos.slice(0, 4).map((repo, index) => (
                            <motion.a
                                key={repo.id}
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative flex flex-col justify-between rounded-2xl border border-border/60 bg-background/60 p-5 transition-all hover:border-primary/50 hover:bg-card/80"
                            >
                                <div className="space-y-3">
                                    <div className="flex items-start justify-between">
                                        <h4 className="font-mono text-base font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                                            {repo.name}
                                        </h4>
                                        <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                                        {repo.description || "No description provided."}
                                    </p>
                                </div>

                                <div className="mt-4 flex items-center justify-between pt-2">
                                    <div className="flex items-center gap-4">
                                        {repo.language && (
                                            <span className="flex items-center gap-1.5 text-[10px] font-medium text-muted-foreground uppercase tracking-widest">
                                                <span className="h-2 w-2 rounded-full bg-primary/60" />
                                                {repo.language}
                                            </span>
                                        )}
                                        <div className="flex items-center gap-3">
                                            <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                                                <Star className="h-3 w-3" />
                                                {repo.stargazers_count}
                                            </span>
                                            <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                                                <GitFork className="h-3 w-3" />
                                                {repo.forks_count}
                                            </span>
                                        </div>
                                    </div>
                                    <span className="text-[10px] text-muted-foreground/60 italic">
                                        {new Date(repo.pushed_at).toLocaleDateString()}
                                    </span>
                                </div>
                            </motion.a>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
