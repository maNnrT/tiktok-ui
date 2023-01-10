//Layouts
import { HeaderOnly } from '~/component/Layout/';
//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
//không cần đăng nhập
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/@/:nickname', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];
// cần đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };
