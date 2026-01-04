import { notFound } from 'next/navigation';
import { Sidebar } from '@/components/home/sidebar';
import { RightSidebar } from '@/components/home/right-sidebar';
import { ProfileHeader } from '@/components/profile/profile-header';
import { ProfileInfo } from '@/components/profile/profile-info';
import { ProfileTabs } from '@/components/profile/profile-tabs';
import { ProfileTimeline } from '@/components/profile/profile-timeline';
import { getUserByUsername } from '@/lib/users';
import { getUserPosts } from '@/lib/posts';
import { formatRelativeTime } from '@/lib/format-date';
import type { Post, LiveEvent, NewsItem } from '@/types/post';

const liveEvents: LiveEvent[] = [];
const newsItems: NewsItem[] = [];

interface ProfilePageProps {
  params: Promise<{
    username: string;
  }>;
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { username } = await params;
  
  // ユーザー情報を取得
  const user = await getUserByUsername(username);
  
  if (!user) {
    notFound();
  }

  // ユーザーの投稿を取得
  const dbPosts = await getUserPosts(user.id);
  
  // Post型に変換
  const posts: Post[] = dbPosts.map((post) => ({
    id: parseInt(post.id.substring(0, 8), 16),
    user: {
      name: user.displayName,
      username: `@${user.username}`,
      avatar: user.profileImageUrl || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`,
    },
    timestamp: formatRelativeTime(post.createdAt),
    content: post.content,
    likes: post._count?.likes || 0,
    retweets: 0,
    replies: post._count?.replies || 0,
  }));

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="max-w-[1280px] mx-auto flex w-full h-screen overflow-y-auto">
        <Sidebar />

        <main className="flex-1 md:max-w-[600px] min-w-0">
          <ProfileHeader name={user.displayName} postCount={user._count.posts} />
          
          <ProfileInfo
            bannerImage={user.coverImageUrl || undefined}
            avatar={user.profileImageUrl || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`}
            name={user.displayName}
            username={`@${user.username}`}
            verified={false}
            bio={user.bio || undefined}
            joinedDate={new Date(user.createdAt).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long' })}
            following={user._count.following}
            followers={user._count.followers}
            isOwnProfile={false}
          />

          <ProfileTabs />
          {posts.length > 0 ? (
            <ProfileTimeline posts={posts} />
          ) : (
            <div className="p-8 text-center text-muted-foreground">
              <p>まだ投稿がありません</p>
              <p className="text-sm mt-2">最初の投稿をしてみましょう！</p>
            </div>
          )}
        </main>

        <RightSidebar className="hidden lg:flex" liveEvents={liveEvents} newsItems={newsItems} />
      </div>
    </div>
  );
}
