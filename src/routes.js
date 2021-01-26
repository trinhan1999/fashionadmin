// Pages
import {
  BackendError,
  Blank,
  Calendar,
  Charts,
  Detail,
  Editor,
  ExpansionPanels,
  Google,
  GridList,
  Home,
  Invoice,
  Leaflet,
  Lists,
  Lockscreen,
  Media,
  Menus,
  NotFound,
  Paper,
  PasswordReset,
  Pickers,
  PricingPage,
  Products,
  Progress,
  SelectionControls,
  Selects,
  Signin,
  Signup,
  Snackbars,
  Social,
  Steppers,
  Tables,
  Tabs,
  Taskboard,
  TextFields,
  TimelinePage,
  Tooltips,
} from './pages';

import AppsIcon from '@material-ui/icons/Apps';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import EqualizerIcon from '@material-ui/icons/Equalizer';
// Icons
import ExploreIcon from '@material-ui/icons/Explore';
import FaceIcon from '@material-ui/icons/Face';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import Looks3Icon from '@material-ui/icons/Looks3';
import Looks4Icon from '@material-ui/icons/Looks4';
import NavigationIcon from '@material-ui/icons/Navigation';
import PagesIcon from '@material-ui/icons/Pages';
import PersonIcon from '@material-ui/icons/Person';
import PhotoIcon from '@material-ui/icons/Photo';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';

export default {
  items: [
    {
      path: '/',
      name: 'Home',
      type: 'link',
      icon: ExploreIcon,
      component: Home
    },
    {
      path: '/apps',
      name: 'Apps',
      type: 'submenu',
      icon: AppsIcon,
      badge: {
        type: 'primary',
        value: '5'
      },
      children: [
        {
          path: '/calendar',
          name: 'Calendar',
          component: Calendar
        },
        {
          path: '/media',
          name: 'Media',
          component: Media
        },
        {
          path: '/social',
          name: 'Social',
          component: Social
        },
      ]
    },
    {
      path: '/material',
      name: 'Tool',
      type: 'submenu',
      icon: EqualizerIcon,
      badge: {
        type: 'error',
        value: '10'
      },
      children: [
        {
          path: '/steppers',
          name: 'Steppers',
          component: Steppers
        },
        {
          path: '/tables',
          name: 'Tables',
          component: Tables
        },
        {
          path: '/text-fields',
          name: 'Text Fields',
          component: TextFields
        },  
      ]
    },
    {
      path: '/editor',
      name: 'Blog',
      type: 'link',
      icon: Looks3Icon,
      component: Editor
    },
    {
      path: '/ecommerce',
      name: 'Ecommerce',
      type: 'submenu',
      icon: Looks4Icon,
      badge: {
        type: 'secondary',
        value: 'N'
      },
      children: [
        {
          path: '/products',
          name: 'Products',
          component: Products
        },
        {
          path: '/detail',
          name: 'Detail',
          component: Detail
        }
      ]
    },
    {
      path: '/pages',
      name: 'Bill',
      type: 'submenu',
      icon: PagesIcon,
      children: [
        {
          path: '/invoice',
          name: 'Invoice',
          component: Invoice
        },
      ]
    },
    {
      name: 'Authentication',
      type: 'submenu',
      icon: PersonIcon,
      children: [
        {
          path: '/signin',
          name: 'Signin',
          component: Signin
        },
        {
          path: '/signup',
          name: 'Signup',
          component: Signup
        },
        {
          path: '/forgot',
          name: 'Forgot',
          component: PasswordReset
        },
        {
          path: '/lockscreen',
          name: 'Lockscreen',
          component: Lockscreen
        }
      ]
    },
  ]
};
