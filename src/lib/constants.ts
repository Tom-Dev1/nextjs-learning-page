/**
 * Toàn bộ dữ liệu trên landing là DỮ LIỆU GIẢ phục vụ minh hoạ UI/UX.
 * Không được hiểu là dữ liệu thật.
 */

export const SITE = {
  name: "MARKETING MASTERCLASS",
  tagline: "Học Marketing bài bản để ra kết quả trong 14 ngày",
  description:
    "Khóa học digital marketing thực chiến: content, quảng cáo Meta/TikTok, funnel, tối ưu chuyển đổi và đo lường.",
  url: "https://marketing-masterclass-demo.vercel.app",
} as const;

/** Demo: số liệu giả */
export const DEMO_HERO = {
  rating: 4.8,
  ratingCount: 1247,
  studentCount: 2000,
  trustBadges: ["Shopee", "TikTok", "Meta Ads", "Google Analytics"] as const,
};

export const NAV_LINKS = [
  { label: "Khóa học", href: "#khoa-hoc" },
  { label: "Lợi ích", href: "#loi-ich" },
  { label: "Lộ trình", href: "#lo-trinh" },
  { label: "Kết quả", href: "#ket-qua" },
  { label: "Học viên", href: "#hoc-vien" },
  { label: "FAQ", href: "#faq" },
] as const;

export const PROBLEMS = [
  {
    title: "Không biết bắt đầu từ đâu",
    desc: "Biển thông tin marketing khiến bạn rối, không có lộ trình rõ ràng.",
  },
  {
    title: "Chạy quảng cáo lỗ liên tục",
    desc: "Ngân sách ads đốt mà không ra đơn, ROAS thấp, CPL cao.",
  },
  {
    title: "Content không ra đơn",
    desc: "Đăng nhiều nhưng ít tương tác, không chuyển đổi thành khách hàng.",
  },
  {
    title: "Đo lường mù mờ",
    desc: "Không biết kênh nào mang về đơn, không tối ưu được funnel.",
  },
] as const;

export const SOLUTIONS = [
  {
    title: "Lộ trình 14 ngày rõ ràng",
    desc: "Từ nền tảng → content → ads → funnel, học đúng thứ tự, áp dụng ngay.",
  },
  {
    title: "Cấu trúc campaign chuẩn",
    desc: "Học cách setup audience, creative, và tối ưu theo KPI thực tế.",
  },
  {
    title: "Hệ thống content 30 ngày",
    desc: "Templates + checklist giúp content bám sát mục tiêu chuyển đổi.",
  },
  {
    title: "Tracking & GA4 thực chiến",
    desc: "Pixel, event, conversion — đo đúng để tối ưu đúng.",
  },
] as const;

export const BENEFITS = [
  {
    icon: "target",
    title: "Lộ trình 14 ngày",
    desc: "Học có hệ thống, không lan man. Mỗi ngày một chủ đề, áp dụng ngay vào shop/doanh nghiệp.",
  },
  {
    icon: "fileText",
    title: "Templates & Checklist",
    desc: "Bộ tài liệu thực chiến: brief content, brief ads, checklist launch campaign.",
  },
  {
    icon: "trendingUp",
    title: "Tối ưu chuyển đổi",
    desc: "Landing, funnel, CTA — học cách tăng tỷ lệ chuyển đổi thay vì chỉ tăng traffic.",
  },
  {
    icon: "barChart",
    title: "Đo lường đúng",
    desc: "GA4, pixel, event. Hiểu số liệu để ra quyết định tối ưu ngân sách.",
  },
  {
    icon: "users",
    title: "Cộng đồng hỗ trợ",
    desc: "Kết nối với học viên cùng lộ trình, chia sẻ case và thắc mắc.",
  },
  {
    icon: "refreshCw",
    title: "Cập nhật liên tục",
    desc: "Nội dung bám sát thay đổi thuật toán và best practice mới nhất.",
  },
] as const;

export const CURRICULUM_MODULES = [
  {
    id: "m1",
    title: "Marketing Foundation & Positioning",
    description: "Xây dựng nền tảng marketing vững chắc: học cách định vị thương hiệu, phân tích đối thủ và xác định điểm khác biệt. Sau module này, bạn sẽ biết cách chọn kênh marketing phù hợp với ngành và ngân sách của mình, đồng thời xây dựng thông điệp cốt lõi thu hút đúng đối tượng mục tiêu.",
    lessons: [
      "Định vị thương hiệu và đối tượng mục tiêu",
      "Phân tích competitor và điểm khác biệt",
      "Thông điệp cốt lõi (value proposition)",
      "Kênh phù hợp theo ngành và budget",
    ],
  },
  {
    id: "m2",
    title: "Customer Insight & Offer",
    description: "Nắm vững tâm lý khách hàng và thiết kế offer không thể từ chối. Bạn sẽ học cách research insight sâu về khách hàng, vẽ customer journey map, và tạo ra offer hấp dẫn với UVP (Unique Value Proposition) và CTA rõ ràng để tăng tỷ lệ chuyển đổi.",
    lessons: [
      "Research insight khách hàng",
      "Customer journey cơ bản",
      "Thiết kế offer hấp dẫn",
      "UVP và CTA rõ ràng",
    ],
  },
  {
    id: "m3",
    title: "Content System (30 ngày)",
    description: "Xây dựng hệ thống content bền vững trong 30 ngày. Học cách lên kế hoạch content chi tiết, format content phù hợp cho từng kênh, tạo brief và checklist sản xuất chuyên nghiệp. Sau module này, bạn sẽ có khả năng repurpose content hiệu quả để tối đa hóa ROI từ mỗi nội dung.",
    lessons: [
      "Lên kế hoạch content 30 ngày",
      "Format content cho từng kênh",
      "Brief và checklist sản xuất",
      "Repurpose content hiệu quả",
    ],
  },
  {
    id: "m4",
    title: "TikTok / Short-form Strategy",
    description: "Làm chủ TikTok và short-form content để tiếp cận hàng triệu người dùng. Học cách hiểu thuật toán TikTok, tạo hook mạnh trong 3 giây đầu, áp dụng format viral một cách cẩn trọng, và quan trọng nhất - chuyển đổi view thành lead và đơn hàng thực tế.",
    lessons: [
      "Thuật toán và best practice TikTok",
      "Hook và 3s đầu video",
      "Format viral và trend (cẩn trọng)",
      "Chuyển đổi từ view sang lead/đơn",
    ],
  },
  {
    id: "m5",
    title: "Meta Ads căn bản → tối ưu",
    description: "Từ zero đến hero với Meta Ads. Bắt đầu từ cấu trúc campaign cơ bản (Campaign → Ad set → Ad), học targeting và audience, đến creative best practices. Module này giúp bạn tối ưu quảng cáo theo ROAS và CPL để đạt hiệu quả cao nhất với ngân sách có hạn.",
    lessons: [
      "Cấu trúc campaign: Campaign → Ad set → Ad",
      "Audience và targeting cơ bản",
      "Creative best practice",
      "Tối ưu theo ROAS, CPL",
    ],
  },
  {
    id: "m6",
    title: "Funnel & Landing tối ưu chuyển đổi",
    description: "Xây dựng landing page chuyển đổi cao và funnel hoàn chỉnh. Học cách thiết kế cấu trúc landing page tối ưu, tối ưu phần above the fold và CTA, thiết kế form capture lead hiệu quả. Module này giúp bạn thực hiện A/B test đơn giản để liên tục cải thiện tỷ lệ chuyển đổi.",
    lessons: [
      "Cấu trúc landing page chuyển đổi",
      "Above the fold và CTA",
      "Form và lead capture",
      "A/B test đơn giản",
    ],
  },
  {
    id: "m7",
    title: "Tracking & Analytics (GA4, pixel)",
    description: "Đo lường đúng để tối ưu đúng. Học cách setup GA4 và conversion tracking, cài đặt Meta Pixel và các event quan trọng, sử dụng UTM để theo dõi nguồn traffic. Sau module này, bạn sẽ biết cách đọc và phân tích báo cáo để đưa ra quyết định dựa trên dữ liệu thực tế.",
    lessons: [
      "Setup GA4 và conversion",
      "Meta Pixel và event",
      "UTM và nguồn traffic",
      "Báo cáo cơ bản và đọc số",
    ],
  },
  {
    id: "m8",
    title: "Growth checklist + templates",
    description: "Hệ thống hóa toàn bộ quy trình với checklist và templates sẵn có. Module này cung cấp checklist launch campaign hoàn chỉnh, templates cho brief và báo cáo, cách lên kế hoạch 90 ngày chiến lược, cùng tài liệu tham khảo để bạn tiếp tục phát triển sau khóa học.",
    lessons: [
      "Checklist launch campaign",
      "Templates brief và báo cáo",
      "Lên kế hoạch 90 ngày",
      "Tài liệu tham khảo thêm",
    ],
  },
] as const;

/** case study metrics giả */
export const CASE_STUDIES = [
  {
    title: "ROAS cải thiện",
    before: 0.8,
    after: 2.4,
    unit: "x",
    label: "ROAS",
  },
  {
    title: "CPL giảm",
    before: 0,
    after: 35,
    suffix: "%",
    label: "CPL giảm",
  },
  {
    title: "Doanh thu 30 ngày",
    before: 0,
    after: 60,
    suffix: "%",
    label: "Doanh thu tăng",
  },
] as const;

/** Demo: thông tin giảng viên giả */
export const INSTRUCTOR = {
  name: "Anh A",
  role: "6+ năm Digital Marketing",
  bio: "Chuyên gia digital marketing, từng vận hành campaign cho nhiều thương hiệu và shop online.",
  highlights: [
    { label: "Ngân sách ads đã chạy", value: "500M+ VND" },
    { label: "Ngành đã tư vấn", value: "15+ ngành" },
    { label: "Học viên đã đào tạo", value: "2.000+" },
  ],
  timeline: [
    { year: "2019", text: "Bắt đầu chạy Meta Ads cho thương hiệu nội địa." },
    { year: "2021", text: "Mở rộng sang TikTok Ads, e-commerce." },
    { year: "2024", text: "Tập trung đào tạo và tư vấn chiến lược." },
  ],
  avatar: "/instructor-avatar.jpg",
} as const;

/** Demo: testimonial giả */
export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Chị B.",
    role: "Chủ shop thời trang",
    content:
      "Trước đây chạy ads cứ đốt tiền, không hiểu vì sao. Học xong biết cách đặt KPI, đo đúng, giờ tối ưu dần thấy ra đơn ổn hơn. Nội dung khóa rất sát thực tế.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Anh C.",
    role: "Marketer junior",
    content:
      "Mình mới vào nghề, khóa này giúp có nền tảng rõ ràng: từ insight khách hàng đến content, ads, funnel. Có template với checklist làm rất nhanh.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Chị D.",
    role: "Kinh doanh mỹ phẩm",
    content:
      "Phần tracking với GA4 và pixel trước giờ mình mù tịt. Giờ biết setup và đọc báo cáo, tự tin hơn khi báo cáo sếp và đề xuất tối ưu.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Anh E.",
    role: "Startup founder",
    content:
      "Lộ trình 14 ngày rất hợp với người bận. Học xong áp dụng luôn vào landing và campaign, thấy conversion cải thiện rõ so với trước.",
    rating: 5,
  },
  {
    id: "t5",
    name: "Chị F.",
    role: "Content creator",
    content:
      "Mình làm content nhưng không biết gắn với bán hàng thế nào. Khóa giúp nối content với funnel và ads, giờ vừa có view vừa có đơn.",
    rating: 5,
  },
  {
    id: "t6",
    name: "Anh G.",
    role: "Quản lý kinh doanh",
    content:
      "Gói Team rất đáng: cả team cùng học, có Q&A riêng giải đáp thắc mắc theo case của công ty. Recommend cho team marketing nhỏ.",
    rating: 5,
  },
] as const;

export const PRICING = {
  listPriceStarter: 249000,
  listPricePro: 279000,
  listPriceTeam: 299000,
  saleStarter: 179000,
  salePro: 199000,
  saleTeam: 200000,
  discountPercentStarter: 28,
  discountPercentPro: 29,
  discountPercentTeam: 33,
  features: {
    starter: [
      "30+ bài học",
      "Templates cơ bản",
      "Checklist launch",
      "Truy cập 12 tháng",
      "Cộng đồng học viên",
    ],
    pro: [
      "Tất cả gói Starter",
      "Templates nâng cao",
      "Case study & ví dụ",
      "Hỗ trợ qua group",
      "Cập nhật trọn đời",
    ],
    team: [
      "Tất cả gói Pro",
      "Q&A riêng cho nhóm",
      "Tài khoản nhóm (5 người)",
      "Ưu tiên hỗ trợ",
      "Bonus: buổi review 1-1",
    ],
  },
  guarantee: "Hoàn tiền 7 ngày nếu không phù hợp",
} as const;

export const FAQ_ITEMS = [
  {
    q: "Học online hay offline?",
    a: "Khóa học 100% online. Bạn học qua video bài giảng và tài liệu, có thể xem lại bất cứ lúc nào trong thời hạn truy cập.",
  },
  {
    q: "Người mới có học được không?",
    a: "Có. Khóa được thiết kế cho người mới bắt đầu: từ khái niệm nền tảng đến thực hành setup campaign, content và tracking.",
  },
  {
    q: "Học bao lâu?",
    a: "Lộ trình khuyến nghị 14 ngày nếu học đều. Bạn có thể học nhanh hơn hoặc kéo dài tùy thời gian rảnh.",
  },
  {
    q: "Có cập nhật nội dung không?",
    a: "Có. Nội dung liên quan thuật toán và best practice sẽ được cập nhật định kỳ (áp dụng cho gói Pro và Team).",
  },
  {
    q: "Có hỗ trợ hỏi đáp không?",
    a: "Có group cộng đồng để hỏi đáp. Gói Team có thêm phiên Q&A riêng cho nhóm.",
  },
  {
    q: "Thanh toán thế nào?",
    a: "Chuyển khoản ngân hàng hoặc ví điện tử. Sau khi thanh toán, bạn nhận email hướng dẫn kích hoạt tài khoản.",
  },
  {
    q: "Hoàn tiền ra sao?",
    a: "Trong vòng 7 ngày kể từ ngày kích hoạt, nếu bạn cảm thấy không phù hợp có thể gửi yêu cầu hoàn tiền (theo điều khoản).",
  },
  {
    q: "Có chứng nhận không?",
    a: "Sau khi hoàn thành khóa và làm bài kiểm tra (nếu có), bạn có thể tải chứng nhận hoàn thành.",
  },
] as const;

export const FOOTER = {
  disclaimer: "*Tất cả số liệu và phản hồi trên trang là dữ liệu giả phục vụ mục đích minh hoạ.*",
  links: [
    { label: "Chính sách bảo mật", href: "#" },
    { label: "Điều khoản sử dụng", href: "#" },
    { label: "Liên hệ", href: "#contact" },
  ],
  social: [
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "YouTube", href: "#", icon: "youtube" },
  ],
  copyright: "© 2025 Marketing Masterclass.",
} as const;

/** Demo: Danh sách khóa học với giá khác nhau */
export const COURSES = [
  {
    id: "course-1",
    title: "Digital Marketing Cơ Bản",
    description: "Khóa học nền tảng cho người mới bắt đầu, từ A-Z về marketing online.",
    price: 149000,
    originalPrice: 199000,
    rating: 4.7,
    students: 3200,
    duration: "4 tuần",
    level: "Cơ bản",
    neonColor: "cyan",
  },
  {
    id: "course-2",
    title: "Content Marketing Mastery",
    description: "Học cách tạo content viral, thu hút khách hàng và tăng doanh số.",
    price: 299000,
    originalPrice: 399000,
    rating: 4.9,
    students: 1850,
    duration: "6 tuần",
    level: "Trung cấp",
    neonColor: "magenta",
  },
  {
    id: "course-3",
    title: "Meta Ads Advanced",
    description: "Chạy quảng cáo Facebook/Instagram hiệu quả, tối ưu ROAS và giảm CPL.",
    price: 399000,
    originalPrice: 549000,
    rating: 4.8,
    students: 2100,
    duration: "8 tuần",
    level: "Nâng cao",
    neonColor: "yellow",
  },
  {
    id: "course-4",
    title: "TikTok Marketing & Ads",
    description: "Chiến lược TikTok từ content đến quảng cáo, tận dụng trend để bán hàng.",
    price: 249000,
    originalPrice: 349000,
    rating: 4.6,
    students: 2800,
    duration: "5 tuần",
    level: "Trung cấp",
    neonColor: "green",
  },
  {
    id: "course-5",
    title: "SEO & Google Ads",
    description: "Tối ưu SEO và chạy Google Ads để tăng traffic chất lượng, ra đơn hiệu quả.",
    price: 349000,
    originalPrice: 479000,
    rating: 4.9,
    students: 1650,
    duration: "7 tuần",
    level: "Nâng cao",
    neonColor: "blue",
  },
  {
    id: "course-6",
    title: "Email Marketing Pro",
    description: "Xây dựng email list, automation và campaign chuyển đổi cao.",
    price: 199000,
    originalPrice: 279000,
    rating: 4.7,
    students: 1950,
    duration: "4 tuần",
    level: "Trung cấp",
    neonColor: "purple",
  },
  {
    id: "course-7",
    title: "E-commerce Marketing",
    description: "Marketing cho shop online: từ setup đến tối ưu conversion và retention.",
    price: 449000,
    originalPrice: 599000,
    rating: 4.8,
    students: 1400,
    duration: "10 tuần",
    level: "Nâng cao",
    neonColor: "pink",
  },
  {
    id: "course-8",
    title: "Social Media Strategy",
    description: "Chiến lược tổng thể cho tất cả nền tảng: Facebook, Instagram, TikTok, YouTube.",
    price: 279000,
    originalPrice: 379000,
    rating: 4.6,
    students: 2250,
    duration: "6 tuần",
    level: "Trung cấp",
    neonColor: "orange",
  },
] as const;
