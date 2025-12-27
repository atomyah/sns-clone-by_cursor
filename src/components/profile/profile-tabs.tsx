'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function ProfileTabs() {
  return (
    <Tabs defaultValue="posts" className="w-full">
      <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0 overflow-x-auto scrollbar-hide">
        <TabsTrigger
          value="posts"
          className="border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-4 py-3 font-medium text-muted-foreground data-[state=active]:text-primary"
        >
          ポスト
        </TabsTrigger>
        <TabsTrigger
          value="replies"
          className="border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-4 py-3 font-medium text-muted-foreground data-[state=active]:text-primary"
        >
          返信
        </TabsTrigger>
        <TabsTrigger
          value="highlights"
          className="border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-4 py-3 font-medium text-muted-foreground data-[state=active]:text-primary"
        >
          ハイライト
        </TabsTrigger>
        <TabsTrigger
          value="articles"
          className="border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-4 py-3 font-medium text-muted-foreground data-[state=active]:text-primary"
        >
          記事
        </TabsTrigger>
        <TabsTrigger
          value="media"
          className="border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-4 py-3 font-medium text-muted-foreground data-[state=active]:text-primary"
        >
          メディア
        </TabsTrigger>
        <TabsTrigger
          value="likes"
          className="border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-4 py-3 font-medium text-muted-foreground data-[state=active]:text-primary"
        >
          いいね
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

