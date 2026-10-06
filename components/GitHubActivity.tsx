import Link from 'next/link';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import { siteConfig } from '@/lib/site';

type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
  updated_at: string;
};

async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${siteConfig.github}/repos?sort=updated&per_page=12`,
      {
        headers: { Accept: 'application/vnd.github+json' },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) return [];

    const repos: GitHubRepo[] = await res.json();
    return repos.filter((repo) => !repo.fork).slice(0, 6);
  } catch {
    return [];
  }
}

export default async function GitHubActivity() {
  const repos = await getGitHubRepos();

  return (
    <section className="max-w-6xl mx-auto px-6 pb-16">
      <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-2 text-center">
        GitHub <span className="heading-gradient">Activity</span>
      </h2>
      <p className="text-center text-slate-500 dark:text-gray-400 mb-8 text-sm">
        Recent open-source work & contributions
      </p>

      <div className="card-light p-4 md:p-6 mb-8 overflow-hidden">
        <img
          src={`https://ghchart.rshah.org/${encodeURIComponent('0891b2')}/${siteConfig.github}`}
          alt="GitHub contribution chart"
          className="w-full h-auto dark:invert dark:opacity-90"
          loading="lazy"
        />
      </div>

      {repos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-light p-4 hover:shadow-glow transition-shadow group"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors truncate">
                  {repo.name}
                </h3>
                <FaGithub className="text-slate-400 shrink-0 mt-1" />
              </div>

              <p className="text-sm text-slate-600 dark:text-gray-400 line-clamp-2 min-h-[40px] mb-3">
                {repo.description || 'No description provided.'}
              </p>

              <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-gray-400">
                {repo.language && (
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" />
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <FaStar className="text-amber-500" />
                  {repo.stargazers_count}
                </span>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="card-light p-6 text-center text-slate-600 dark:text-gray-400">
          <FaCodeBranch className="mx-auto mb-2 text-2xl text-cyan-500" />
          <p>Could not load repos right now.</p>
          <Link
            href={`https://github.com/${siteConfig.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 dark:text-cyan-400 hover:underline text-sm mt-2 inline-block"
          >
            View GitHub profile →
          </Link>
        </div>
      )}

      <div className="text-center mt-6">
        <Link
          href={`https://github.com/${siteConfig.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline inline-block text-sm"
        >
          See all repos on GitHub
        </Link>
      </div>
    </section>
  );
}
