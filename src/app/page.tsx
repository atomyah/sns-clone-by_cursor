import { Sidebar } from '@/components/home/sidebar';
import { RightSidebar } from '@/components/home/right-sidebar';
import { PostForm } from '@/components/home/post-form';
import { PostList } from '@/components/home/post-list';
import type { Post, LiveEvent, NewsItem } from '@/types/post';

const mockPosts: Post[] = [
  {
    id: 1,
    user: {
      name: 'ベンゾジアゼピン情報センター【公式】',
      username: '@benzoinfojapan',
      avatar:
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    timestamp: '2020年3月7日',
    content:
      'ベンゾジアゼピン問題は日本だけでなく世界中で同様です。減薬の困難性と正しい処方に関する医療界の無知が問題です。服薬中でも"いきなりやめないで"といった内容が...',
    likes: 24,
    retweets: 8,
    replies: 5,
    pinned: true,
  },
  {
    id: 2,
    user: {
      name: 'ベンゾジアゼピン情報センター【公式】',
      username: '@benzoinfojapan',
      avatar:
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    timestamp: '2020年3月6日',
    content:
      'ベンゾジアゼピン薬の被害実態、医学論文、減薬方法などの情報をウェブサイトと書籍で提供しています。',
    likes: 42,
    retweets: 15,
    replies: 8,
  },
  {
    id: 3,
    user: {
      name: 'ベンゾジアゼピン情報センター【公式】',
      username: '@benzoinfojapan',
      avatar:
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    timestamp: '2020年3月5日',
    content:
      '減薬を始める前に、必ず医師と相談してください。自己判断での減薬は危険です。',
    likes: 156,
    retweets: 89,
    replies: 32,
  },
  {
    id: 4,
    user: {
      name: 'ベンゾジアゼピン情報センター【公式】',
      username: '@benzoinfojapan',
      avatar:
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    timestamp: '2020年3月4日',
    content:
      'ベンゾフォーラムで多くの質問にお答えしています。減薬に関する不安や疑問があれば、ぜひご相談ください。',
    images: [
      'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=300',
    ],
    likes: 203,
    retweets: 112,
    replies: 45,
  },
  {
    id: 5,
    user: {
      name: 'ベンゾジアゼピン情報センター【公式】',
      username: '@benzoinfojapan',
      avatar:
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    timestamp: '2020年3月3日',
    content:
      '最新の医学論文をまとめた資料を公開しました。医療従事者の方にも参考にしていただけます。',
    likes: 278,
    retweets: 156,
    replies: 67,
  },
];

const liveEvents: LiveEvent[] = [
  {
    id: 1,
    user: 'まる',
    status: '（本人）',
    title: 'さづだーん笑お🎄11時終✓',
    participants: [
      'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100',
      'https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg?auto=compress&cs=tinysrgb&w=100',
    ],
    count: 14,
  },
  {
    id: 2,
    user: 'くてだまPfizer',
    status: '2🎓',
    title: 'スローぷ？レミーズ？な...',
    participants: [
      'https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=100',
      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
    ],
    count: 11,
  },
];

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'あしろう占いPCが...',
    status: 'さんがホストしています',
    verified: true,
  },
  {
    id: 2,
    title: '宣伝オリボス金闘スペース【引用リプOK】',
    status: 'さんがホストしています',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="max-w-[1280px] mx-auto flex w-full">
        <Sidebar />

        <main className="flex-1 md:max-w-[600px] min-w-0 h-screen overflow-y-auto">
          <div className="sticky top-0 bg-background/80 backdrop-blur-sm z-10 px-4 py-3">
            <h1 className="text-xl font-bold">ホーム</h1>
          </div>
          
          <PostForm />
          <PostList posts={mockPosts} />
        </main>

        <RightSidebar className="hidden lg:flex" liveEvents={liveEvents} newsItems={newsItems} />
      </div>
    </div>
  );
}
