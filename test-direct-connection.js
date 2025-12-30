const { Client } = require('pg');
require('dotenv').config();

// DIRECT_URLを使用
const directUrl = "postgresql://postgres:PtGUc5CSAInxt5Yc@db.bejosbewartlvecrihuq.supabase.co:5432/postgres";

const client = new Client({
  connectionString: directUrl,
});

console.log('DIRECT_URL接続テスト中...');
console.log('接続先:', directUrl.replace(/:([^:@]+)@/, ':****@'));

client.connect()
  .then(() => {
    console.log('✅ 接続成功！');
    return client.query('SELECT version()');
  })
  .then(result => {
    console.log('PostgreSQL:', result.rows[0].version);
    client.end();
    console.log('\n✅ これでマイグレーションが動作します！');
    console.log('次のステップ: .envにDIRECT_URLを追加して npm run db:push を実行');
  })
  .catch(err => {
    console.error('❌ 接続失敗:', err.message);
    process.exit(1);
  });

