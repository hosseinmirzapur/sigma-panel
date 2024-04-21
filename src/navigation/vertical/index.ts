// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  const items: VerticalNavItemsType = [
    {
      title: 'داشبورد',
      icon: 'tabler:smart-home',
      path: '/dashboards/ecommerce'
    },
    {
      title: 'بازگشت به وبسایت',
      icon: 'tabler:arrow-back-up',
      externalLink: true,
      path: 'https://sigma-world.vercel.app'
    },
    {
      sectionTitle: 'تنظیمات کلی'
    },
    {
      title: 'ساعات ارائه خدمات',
      icon: 'tabler:calendar-clock',
      path: '#'
    },
    {
      title: 'فعال / غیرفعال سازی خدمات',
      icon: 'tabler:click',
      path: '#'
    },
    {
      title: 'اطلاعات شبکه های اجتماعی',
      icon: 'tabler:social',
      path: '#'
    },
    {
      title: 'مدیریت نمایندگان',
      icon: 'tabler:brand-git',
      path: ''
    },
    {
      title: 'نقش ها / سطوح دسترسی',
      icon: 'tabler:user-check',
      path: ''
    },
    {
      title: 'شرکت های زیر مجموعه',
      icon: 'tabler:category',
      path: ''
    },
    {
      sectionTitle: 'مدیریت'
    },
    {
      title: 'آموزش ها',
      icon: 'tabler:school',
      path: '#'
    },
    {
      title: 'درخواست های مشاوره',
      icon: 'tabler:headset',
      path: '#'
    },
    {
      title: 'ارائه کارت بازرگانی',
      icon: 'tabler:id',
      path: '#'
    },
    {
      title: 'حمل و نقل بین المللی',
      icon: 'tabler:tir',
      path: '#'
    },
    {
      title: 'بازرسی فنی و استاندارد',
      icon: 'tabler:zoom-scan',
      path: '#'
    },
    {
      title: 'ترحیص گمرکی کالا',
      icon: 'tabler:cloud-lock-open',
      path: '#'
    },
    {
      title: 'سفارشات و دور اظهاری',
      icon: 'tabler:truck-delivery',
      path: ''
    },
    {
      title: 'بیمه باربری',
      icon: 'tabler:firetruck',
      path: '#'
    },
    {
      title: 'ضمانت نامه صادراتی',
      icon: 'tabler:table-export',
      path: '#'
    },
    {
      title: 'پرداخت های بین المللی',
      icon: 'tabler:brand-mastercard',
      path: '#'
    },
    {
      title: 'تهیه و تنظیم قرارداد بین المللی',
      icon: 'tabler:writing',
      path: '#'
    },
    {
      title: 'مکاتبات و مذاکرات بین المللی',
      icon: 'tabler:brand-hipchat',
      path: '#'
    },
    {
      title: 'بازاریابی بین الملل',
      icon: 'tabler:shopping-cart',
      path: '#'
    },
    {
      title: 'عضویت در اتاق های بازرگانی',
      icon: 'tabler:door',
      path: '#'
    },
    {
      title: 'احراز هویت بازرگانان و تجار',
      icon: 'tabler:key',
      path: '#'
    },
    {
      title: 'کاربران',
      icon: 'tabler:users',
      path: '#'
    },
    {
      title: 'تیکت های پشتیبانی',
      icon: 'tabler:lifebuoy',
      path: '#'
    },
    {
      title: 'پیام ها (نوتیفیکیشن)',
      icon: 'tabler:bell',
      path: '#'
    },
    {
      title: 'تراکنش ها',
      icon: 'tabler:coins',
      path: '#'
    },
    {
      sectionTitle: 'کالا ها'
    },
    {
      title: 'دسته بندی ها',
      icon: 'tabler:category-2',
      path: '#'
    },
    {
      title: 'تعریف کالا',
      icon: 'tabler:box',
      path: '#'
    }
  ]

  return items
}

export default navigation
