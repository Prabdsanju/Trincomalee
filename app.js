/**
 * 2-Day Family Tour: Nawagattegama -> Anuradhapura -> Trincomalee
 * Accurate Itinerary, Authentic Sri Lankan Landmark Photos & Logic
 */

// Target Countdown: October 16, 2026 at 04:30 AM (Asia/Colombo / UTC+05:30)
const TOUR_START_TIMESTAMP = new Date('2026-10-16T04:30:00+05:30').getTime();

// Full 2-Day Tour Schedule (Detailed Timeline Data)
const TOUR_SCHEDULE_DATA = {
  day1: {
    title: "1 වන දිනය (ඔක්තෝබර් 16): අනුරාධපුරය වැඳපුදාගෙන ත්‍රිකුණාමලයට යාම",
    timeline: [
      {
        time: "අලුයම 04:30 - 05:45",
        title: "නාවගත්තේගමෙන් ගමන ආරම්භය ➔ අනුරාධපුරයට ළඟා වීම",
        icon: "🚗",
        badge: "Departure & Drive",
        badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
        desc: "නාවගත්තේගම නිවසින් ගමන ආරම්භ කර අනුරාධපුරය බලා ගමන් කිරීම. පාන්දර සිසිල් කාලගුණය නිසා රිය පැදවීම ඉතා පහසුය.",
        tips: "වාහනයේ ඉන්ධන, ටයර් ප්‍රෙෂර් පරීක්ෂා කර පවුලේ සැම වේලාවට ලෑස්ති වන්න."
      },
      {
        time: "උදෑසන 05:45 - 08:00",
        title: "ශ්‍රී මහා බෝධීන් වහන්සේ සහ රුවන්වැලි සෑය වැඳපුදා ගැනීම & උදෑසන ආහාරය",
        icon: "🌸",
        badge: "Sacred Heritage & Breakfast",
        badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
        desc: "උදේ පාන්දරම ජය ශ්‍රී මහා බෝධීන් වහන්සේ සහ රුවන්වැලි මහා සෑය වැඳපුදා ගැනීම. උදේ කාලයේ සෙනඟ අඩුයි, අව්ව නැති නිසා පවුලේ සැමට නිදහසේ වන්දනා කරන්න පුළුවන්. ඉන්පසු අනුරාධපුරයෙන් උදෑසන ආහාරය (Breakfast) ගැනීම.",
        tips: "සුදු හෝ සංවර ඇඳුම් අඳින්න. පාවහන් ගැලවුම් ස්ථානයේ තබන්න."
      },
      {
        time: "උදෑසන 08:30 - දවල් 12:00",
        title: "අනුරාධපුරයේ සිට හොරොව්පොතාන හරහා ත්‍රිකුණාමලයට රිය පැදවීම",
        icon: "🛣️",
        badge: "Scenic Highway Drive",
        badgeColor: "bg-sky-500/20 text-sky-300 border-sky-500/30",
        desc: "A12 මාර්ගය ඔස්සේ හොරොව්පොතාන පසුකරමින් ත්‍රිකුණාමලයට සුන්දර ගමන. අතරමගදී තැඹිලි හෝ කෙටි විවේකයක් ගත හැක.",
        tips: "වනගත ප්‍රදේශ පසුකරන බැවින් සෙමෙන් සහ විමසිලිමත්ව රිය පදවන්න."
      },
      {
        time: "දවල් 12:00 - ප.ව. 01:30",
        title: "ත්‍රිකුණාමල හෝටලයට ළඟා වීම, බෑග් තැබීම & දිවා ආහාරය (Lunch)",
        icon: "🍛",
        badge: "Check-in & Lunch",
        badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
        desc: "ත්‍රිකුණාමලයේ වෙන්කරගත් හෝටලයට ළඟා වී බඩුබාහිරාදිය තබා, මුහුණ කට සෝදාගෙන රසවත් දිවා ආහාරය (Lunch) භුක්ති විඳීම.",
        tips: "හෝටලයේ Check-in වී මඳ විවේකයක් ගෙන සවස සංචාරයට ලෑස්ති වන්න."
      },
      {
        time: "ප.ව. 03:00 - 04:30",
        title: "කොණේස්වරම් කෝවිල සහ ෆ්‍රෙඩ්රික් කොටුව (Koneswaram & Fort Frederick)",
        icon: "🕉️",
        badge: "Historic Fort & Lover's Leap",
        badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
        desc: "ඓතිහාසික ෆ්‍රෙඩ්රික් කොටුව තුළ සිටින තිත්මුවන් (Spotted Deer) නරඹමින්, Swami Rock (Lovers Leap) මුහුදු දර්ශන සහ කෝනේශ්වරම් කෝවිල නැරඹීම.",
        tips: "කෝවිල් බිමේ සපත්තු ගැලවිය යුතුය. Lover's Leap ප්‍රපාතය අසල ළමුන් අතින් අල්ලාගන්න."
      },
      {
        time: "ප.ව. 05:00 - සවස 06:30",
        title: "උප්පුවේලි හෝ නිලාවේලි වෙරළ (Uppuveli / Nilaveli Beach)",
        icon: "🏖️",
        badge: "Sunset Beach Walk",
        badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
        desc: "හිරු බසින වෙලාවට මුහුදු වෙරළේ ඇවිදින්න, මුහුදු සුළඟ විඳිමින් පවුලේ අයට නිදහසේ කාලය ගත කරන්න කියාපු තැන.",
        tips: "රන්වන් හිරු බැසීම ඡායාරූප ගැනීමට කදිම වේලාවයි."
      },
      {
        time: "රාත්‍රී 08:00",
        title: "රාත්‍රී ආහාරය (Dinner) සහ හෝටලයේ විවේකය",
        icon: "🌙",
        badge: "Dinner & Relax",
        badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
        desc: "ත්‍රිකුණාමලයෙන් රසවත් රාත්‍රී ආහාරය ගෙන හෝටලයේ නතර වී හොඳින් විවේක ගැනීම. ඊළඟ දිනයට ශක්තිය ලබා ගැනීම.",
        tips: "දෙවන දිනය උදෑසන මාබල් බීච් සහ උණුදිය උල්පත් වෙත යාමට වේලාසනින් නිදාගන්න."
      }
    ]
  },
  day2: {
    title: "2 වන දිනය (ඔක්තෝබර් 17): මාබල් බීච්, උණු දිය උල්පත් සහ නැවත ගෙදර පැමිණීම",
    timeline: [
      {
        time: "උදෑසන 07:30 - 08:30",
        title: "හෝටලයෙන් උදෑසන ආහාරය ගෙන චෙක්-අවුට් (Check-out) වීම",
        icon: "☕",
        badge: "Breakfast & Checkout",
        badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
        desc: "හෝටලයෙන් ප්‍රණීත උදෑසන ආහාරය ලබාගෙන සියලු බෑග් අසුරාගෙන හෝටලයෙන් Check-out වීම.",
        tips: "හෝටල් කාමරයේ දුරකථන චාජර් හෝ බඩු අමතක වී ඇත්දැයි පරීක්ෂා කරන්න."
      },
      {
        time: "උදෑසන 09:00 - 10:00",
        title: "කන්නියා උණු දිය උල්පත් (Kanniya Hot Wells)",
        icon: "♨️",
        badge: "7 Thermal Wells",
        badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
        desc: "රාවණා රජු සමයට නෑකම් කියන ඓතිහාසික උණු දිය උල්පත් 7 නරඹා කුඩා අත්දැකීමක් ලබා ගැනීම.",
        tips: "ළිං ආසන්නයේ සබන් භාවිතය තහනම්ය. පොළොව ලිස්සන බැවින් ප්‍රවේශම් වන්න."
      },
      {
        time: "උදෑසන 10:30 - ප.ව. 01:00",
        title: "මාබල් බීච් (Marble Beach) - පවුලේ මුහුදු විනෝදය",
        icon: "🌊",
        badge: "Crystal Clear Calm Bay",
        badgeColor: "bg-sky-500/20 text-sky-300 border-sky-500/30",
        desc: "පවුලේ හැමෝටම බියකින් තොරව නාන්න, සෙල්ලම් කරන්න පුළුවන් රළ අඩු, ජලය ඉතා පිරිසිදු සුවපහසු වෙරළ තීරයක්.",
        tips: "නාවික/ගුවන් හමුදා අධීක්ෂණය යටතේ පවතින ඉතා ආරක්ෂිත වෙරළකි. සන්ක්‍රීම් හා තුවා ලෑස්ති කරගන්න."
      },
      {
        time: "ප.ව. 01:00 - 02:00",
        title: "ත්‍රිකුණාමලයෙන් හෝ මගදී දිවා ආහාරය (Lunch) ගැනීම",
        icon: "🍛",
        badge: "Seafood & Rice Lunch",
        badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
        desc: "නැවුම් මුහුදු ආහාර හෝ සාම්ප්‍රදායික බත් සහ වෑංජන සමඟ සුවපහසු දිවා ආහාරය.",
        tips: "නැවත දීර්ඝ ගමනකට පෙර හොඳින් වතුර පානය කර සැහැල්ලු වන්න."
      },
      {
        time: "ප.ව. 02:00",
        title: "ත්‍රිකුණාමලයෙන් සමුගෙන හබරණ - දඹුල්ල - කැකිරාව හරහා පිටත්වීම",
        icon: "🚗",
        badge: "Return Journey Kick-off",
        badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
        desc: "ත්‍රිකුණාමලයෙන් සමුගෙන හබරණ - දඹුල්ල - කැකිරාව හරහා නැවත නාවගත්තේගම බලා පිටත් වීම.",
        tips: "මාර්ගයේ සුන්දර පරිසරය නරඹමින් සුවපහසුවෙන් ගමන් කරන්න."
      },
      {
        time: "සවස 05:30 - 06:00",
        title: "කිසිම මහන්සියක් නැතුව ආරක්ෂිතව නාවගත්තේගම නිවසටම ළඟා වීම",
        icon: "🏡",
        badge: "Safe Arrival Home",
        badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
        desc: "දෙදින සුන්දර මතකයන් රැසක් සමඟ කිසිදු වෙහෙසකින් තොරව නිරුපද්‍රිතව නාවගත්තේගම ඔබේ නිවසටම ළඟා වීමට හැකි වීම.",
        tips: "චාරිකාව සාර්ථකව අවසන්! පවුලේ සැමට සුභ සන්ධ්‍යාවක්!"
      }
    ]
  }
};

// Default Locations with Authentic Sri Lankan Images
const DEFAULT_LOCATIONS = [
  {
    id: 'loc-1',
    name: 'Nawagattegama (Start Point)',
    sinName: 'නාවගත්තේගමෙන් ගමන ආරම්භය',
    lat: 7.9880,
    lng: 80.1245,
    time: 'අලුයම 04:30 - 05:45',
    day: 1,
    category: 'Start & Departure',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    pinColor: '#10b981',
    image: 'assets/images/nawagattegama.jpg',
    description: 'නාවගත්තේගම නිවසින් අලුයම 04:30 ට ගමන ආරම්භ කර අනුරාධපුරය බලා ගමන් කිරීම. පාන්දර සිසිල් කාලගුණය සහ නිස්කලංක මාර්ගය.',
    proximityReminder: '🚗 ගමන ආරම්භය: පවුලේ සැමට සුබ ගමන්! වාහනයේ ඉන්ධන, ටයර් ප්‍රෙෂර් පරීක්ෂා කරන්න. උදෑසන වතුර බෝතල් රැගෙන යාමට අමතක නොකරන්න.',
    tips: 'Check tire pressure, ensure all family bags are loaded.'
  },
  {
    id: 'loc-2',
    name: 'Jaya Sri Maha Bodhi & Ruwanwelisaya',
    sinName: 'ශ්‍රී මහා බෝධිය සහ රුවන්වැලි සෑය වැඳපුදා ගැනීම',
    lat: 8.3507,
    lng: 80.3962,
    time: 'උදෑසන 05:45 - 08:00',
    day: 1,
    category: 'Sacred Heritage',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    pinColor: '#f59e0b',
    image: 'assets/images/ruwanwelisaya.jpg',
    description: 'උදේ පාන්දරම ශ්‍රී මහා බෝධීන් වහන්සේ සහ රුවන්වැලි සෑය වැඳපුදා ගැනීම. (උදේ කාලයේ සෙනඟ අඩුයි, අව්ව නැති නිසා නිදහසේ වන්දනා කරන්න පුළුවන්). අනුරාධපුරයෙන් උදෑසන ආහාරය (Breakfast) ගැනීම.',
    proximityReminder: '🌸 අනුරාධපුර පූජා භූමිය: කරුණාකර සුදු හෝ සංවර ඇඳුම් අඳින්න. සපත්තු/සෙරෙප්පු පාවහන් ගැලවුම් ස්ථානයේ තබන්න. නෙළුම් මල් හා තෙල් පූජාව සඳහා සූදානම් කරගන්න.',
    tips: 'Modest white attire required. Enjoy peaceful early morning veneration.'
  },
  {
    id: 'loc-3',
    name: 'Trincomalee Hotel & Lunch',
    sinName: 'ත්‍රිකුණාමල හෝටලයට ළඟා වීම & දිවා ආහාරය',
    lat: 8.5711,
    lng: 81.2335,
    time: 'දවල් 12:00 - ප.ව. 01:30',
    day: 1,
    category: 'Hotel Check-in & Dining',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    pinColor: '#059669',
    image: 'assets/images/nilaveli.jpg',
    description: 'අනුරාධපුරයේ සිට හොරොව්පොතාන හරහා ත්‍රිකුණාමලයට රිය පැදවීම (පැය ~3.5). ත්‍රිකුණාමලයේ හෝටලයට ළඟා වී, බෑග් ටික තබා, ප්‍රණීත දිවා ආහාරය (Lunch) ගැනීම.',
    proximityReminder: '🍛 ත්‍රිකුණාමලයට ළඟා වීම: හෝටලයේ Check-in වී බෑග් තබන්න. දිවා ආහාරය ගෙන මඳ විවේකයක් ලබාගෙන සවස සංචාරයට ලෑස්ති වන්න.',
    tips: 'Relax and freshen up after the morning highway drive.'
  },
  {
    id: 'loc-4',
    name: 'Koneswaram Temple & Fort Frederick',
    sinName: 'කොණේස්වරම් කෝවිල සහ ෆ්‍රෙඩ්රික් කොටුව',
    lat: 8.5878,
    lng: 81.2443,
    time: 'ප.ව. 03:00 - 04:30',
    day: 1,
    category: 'Temple & Scenic Clifftop',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    pinColor: '#f43f5e',
    image: 'assets/images/koneswaram.jpg',
    description: 'ලස්සන මුහුදු දර්ශන (Lovers Leap) සහ ඉතිහාසය නරඹන්න පහසුවෙන් ඇවිදින්න පුළුවන්. කොටුව ඇතුළත සිටින තිත්මුවන් නැරඹීම සහ ස්වාමි පර්වතයේ අසිරිය.',
    proximityReminder: '🕉️ කොණේස්වරම් කෝවිල් බිම: සපත්තු ගැලවිය යුතුය. කොටුව ඇතුළත සිටින මුවන් බැලිය හැක. Swami Rock (Lover\'s Leap) ප්‍රපාතය අසල ළමුන් ආරක්ෂාකාරීව තබාගන්න!',
    tips: 'Remove shoes at entrance. Incredible ocean view from Swami Rock.'
  },
  {
    id: 'loc-5',
    name: 'Uppuveli / Nilaveli Beach',
    sinName: 'උප්පුවේලි හෝ නිලාවේලි වෙරළ',
    lat: 8.6888,
    lng: 81.1895,
    time: 'ප.ව. 05:00 - සවස 06:30',
    day: 1,
    category: 'Sunset Beach Walk',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    pinColor: '#0284c7',
    image: 'assets/images/nilaveli.jpg',
    description: 'හිරු බසින වෙලාවට මුහුදු වෙරළේ ඇවිදින්න, පවුලේ අයට නිදහසේ කාලය ගත කරන්න කියාපු තැන. රෑ 08:00 ට රාත්‍රී ආහාරය ත්‍රිකුණාමලයෙන් ගෙන හෝටලයේ නතර වී හොඳින් විවේක ගැනීම.',
    proximityReminder: '🏖️ මුහුදු වෙරළ: හිරු බැසීම නරඹමින් වෙරළ තීරයේ විවේක ගන්න. රෑ 08:00 ට පෙර රාත්‍රී ආහාරයට සූදානම් වන්න.',
    tips: 'Perfect golden hour lighting for family photos.'
  },
  {
    id: 'loc-6',
    name: 'Kanniya Hot Wells',
    sinName: 'කන්නියා උණු දිය උල්පත්',
    lat: 8.6186,
    lng: 81.1730,
    time: 'උදෑසන 09:00 - 10:00 (Day 2)',
    day: 2,
    category: 'Natural Heritage Wells',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    pinColor: '#06b6d4',
    image: 'assets/images/kanniya.jpg',
    description: 'හෝටලයෙන් උදෑසන ආහාරය ගෙන Check-out වීමෙන් පසු ඓතිහාසික උණු දිය උල්පත් 7 නරඹා කුඩා අත්දැකීමක් ලබා ගැනීම.',
    proximityReminder: '♨️ කන්නියා උණුදිය ළිං: ඓතිහාසික උණු දිය උල්පත් 7 නරඹන්න. සබන් භාවිතය තහනම්ය. පොඩි ළමුන් ලිස්සා නොයන ලෙස අතින් අල්ලාගන්න.',
    tips: 'Soap strictly prohibited. Ancient wells with varying temperatures.'
  },
  {
    id: 'loc-7',
    name: 'Marble Beach (SLAF Bay)',
    sinName: 'මාබල් බීච් (පිරිසිදු සුවපහසු වෙරළ)',
    lat: 8.5147,
    lng: 81.2336,
    time: 'උදෑසන 10:30 - ප.ව. 01:00 (Day 2)',
    day: 2,
    category: 'Family Beach & Swimming',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    pinColor: '#8b5cf6',
    image: 'assets/images/marble_beach.jpg',
    description: 'පවුලේ හැමෝටම බියකින් තොරව නාන්න, සෙල්ලම් කරන්න පුළුවන් රළ අඩු, ජලය ඉතා පිරිසිදු සුවපහසු වෙරළ තීරයක්.',
    proximityReminder: '🌊 මාබල් බීච්: ඉතාම නිස්කලංක හා ආරක්ෂිත නොගැඹුරු මුහුදු බොක්කකි. පවුලේ සැමට ආරක්ෂිතව දියනා විනෝද විය හැක.',
    tips: 'Calm water ideal for kids and elders. Beautiful forest hills backdrop.'
  },
  {
    id: 'loc-8',
    name: 'Return via Habarana - Dambulla - Kekirawa',
    sinName: 'හබරණ - දඹුල්ල - කැකිරාව හරහා නාවගත්තේගමට',
    lat: 7.9880,
    lng: 80.1245,
    time: 'ප.ව. 02:00 - සවස 06:00 (Day 2)',
    day: 2,
    category: 'Return & Home Arrival',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    pinColor: '#10b981',
    image: 'assets/images/nawagattegama.jpg',
    description: 'ප.ව. 01:00 ට දිවා ආහාරය ගෙන, ප.ව. 02:00 ට ත්‍රිකුණාමලයෙන් සමුගෙන හබරණ - දඹුල්ල - කැකිරාව හරහා නැවත නාවගත්තේගම බලා පිටත් වීම. සවස 05:30 - 06:00 වන විට කිසිම මහන්සියක් නැතුව ආරක්ෂිතව ඔබේ නිවසටම ළඟා වීම.',
    proximityReminder: '🏡 ආරක්ෂිතව නිවසට පැමිණීම: දෙදින සුන්දර මතකයන් රැසක් සමඟ නිරුපද්‍රිතව නාවගත්තේගම නිවසටම ළඟා වීමට හැකිවීම!',
    tips: 'Safe return journey. Cherish the wonderful family memories!'
  }
];

// Default Expenses
const DEFAULT_EXPENSES = [
  { id: 'exp-1', name: 'උදෑසන ආහාරය (Breakfast) - අනුරාධපුරය', category: 'Breakfast', day: 1, cost: 4500 },
  { id: 'exp-2', name: 'දිවා ආහාරය (Lunch) - ත්‍රිකුණාමලය හෝටලය', category: 'Lunch', day: 1, cost: 7000 },
  { id: 'exp-3', name: 'තැඹිලි සහ සවස කෙටි ආහාර', category: 'Snack', day: 1, cost: 2000 },
  { id: 'exp-4', name: 'රාත්‍රී ආහාරය (Dinner) - ත්‍රිකුණාමලය', category: 'Dinner', day: 1, cost: 8500 },
  { id: 'exp-5', name: 'හෝටලයෙන් උදෑසන ආහාරය (Day 2 Breakfast)', category: 'Breakfast', day: 2, cost: 5000 },
  { id: 'exp-6', name: 'මාබල් බීච් ප්‍රවේශ පත්‍ර සහ කන්නියා ප්‍රවේශය', category: 'Tickets', day: 2, cost: 2500 },
  { id: 'exp-7', name: 'දිවා ආහාරය (Day 2 Lunch) - ත්‍රිකුණාමලය/මගදී', category: 'Lunch', day: 2, cost: 7500 },
  { id: 'exp-8', name: 'ඉන්ධන (Fuel Reserve) - සම්පූර්ණ ගමනට', category: 'Transit', day: 1, cost: 16000 }
];

// State Management
class TourApp {
  constructor() {
    // Check if stored data already has authentic local images, otherwise use updated DEFAULT_LOCATIONS
    const stored = this.loadFromStorage('tour_locations_v2', null);
    if (!stored) {
      this.locations = JSON.parse(JSON.stringify(DEFAULT_LOCATIONS));
      this.saveToStorage('tour_locations_v2', this.locations);
    } else {
      this.locations = stored;
    }

    this.expenses = this.loadFromStorage('tour_expenses_v2', DEFAULT_EXPENSES);
    this.familyCount = parseInt(localStorage.getItem('tour_family_count') || '5', 10);
    this.activeDayTab = 1;
    this.map = null;
    this.markers = [];
    this.routePolyline = null;
    this.countdownInterval = null;

    this.init();
  }

  loadFromStorage(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  saveToStorage(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error(`Error saving ${key}:`, e);
    }
  }

  init() {
    this.initCountdown();
    this.renderDetailedSchedule();
    this.initMap();
    this.renderItinerary();
    this.renderExpenses();
    this.renderLocationTable();
    this.setupEventListeners();
  }

  // --- Detailed Schedule (User's Exact Timeline) ---
  renderDetailedSchedule() {
    const day1Container = document.getElementById('timeline-day-1');
    const day2Container = document.getElementById('timeline-day-2');

    if (day1Container) {
      day1Container.innerHTML = TOUR_SCHEDULE_DATA.day1.timeline.map((step, idx) => `
        <div class="relative pl-8 sm:pl-10 pb-7 border-l-2 border-ocean-600/40 last:border-l-0 last:pb-0 group">
          <!-- Dot / Icon -->
          <div class="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-slate-900 border-2 border-ocean-500 flex items-center justify-center text-sm shadow-md group-hover:scale-110 transition-transform">
            ${step.icon}
          </div>

          <div class="glass-card rounded-2xl p-4 sm:p-5 border border-slate-800 hover:border-ocean-500/40 transition">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>${step.time}</span>
              </span>
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${step.badgeColor}">
                ${step.badge}
              </span>
            </div>

            <h4 class="font-bold text-sm sm:text-base text-white mb-1.5">${step.title}</h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">${step.desc}</p>

            <div class="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
              <span class="text-amber-400">💡</span>
              <span><strong class="text-slate-300">උපදෙස:</strong> ${step.tips}</span>
            </div>
          </div>
        </div>
      `).join('');
    }

    if (day2Container) {
      day2Container.innerHTML = TOUR_SCHEDULE_DATA.day2.timeline.map((step, idx) => `
        <div class="relative pl-8 sm:pl-10 pb-7 border-l-2 border-amber-500/40 last:border-l-0 last:pb-0 group">
          <!-- Dot / Icon -->
          <div class="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-slate-900 border-2 border-amber-500 flex items-center justify-center text-sm shadow-md group-hover:scale-110 transition-transform">
            ${step.icon}
          </div>

          <div class="glass-card rounded-2xl p-4 sm:p-5 border border-slate-800 hover:border-amber-500/40 transition">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>${step.time}</span>
              </span>
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${step.badgeColor}">
                ${step.badge}
              </span>
            </div>

            <h4 class="font-bold text-sm sm:text-base text-white mb-1.5">${step.title}</h4>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">${step.desc}</p>

            <div class="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
              <span class="text-amber-400">💡</span>
              <span><strong class="text-slate-300">උපදෙස:</strong> ${step.tips}</span>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  // --- Countdown & Celebrations ---
  initCountdown() {
    const update = () => {
      const now = new Date().getTime();
      const diff = TOUR_START_TIMESTAMP - now;

      const daysEl = document.getElementById('count-days');
      const hoursEl = document.getElementById('count-hours');
      const minsEl = document.getElementById('count-mins');
      const secsEl = document.getElementById('count-secs');
      const badgeStatusEl = document.getElementById('tour-status-badge');

      if (diff <= 0) {
        if (daysEl) daysEl.innerText = '00';
        if (hoursEl) hoursEl.innerText = '00';
        if (minsEl) minsEl.innerText = '00';
        if (secsEl) secsEl.innerText = '00';
        if (badgeStatusEl) {
          badgeStatusEl.innerText = '🎉 චාරිකාව ආරම්භ වී ඇත! (Tour is Live!)';
          badgeStatusEl.className = 'inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 animate-pulse';
        }
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      if (daysEl) daysEl.innerText = String(days).padStart(2, '0');
      if (hoursEl) hoursEl.innerText = String(hours).padStart(2, '0');
      if (minsEl) minsEl.innerText = String(mins).padStart(2, '0');
      if (secsEl) secsEl.innerText = String(secs).padStart(2, '0');
    };

    update();
    this.countdownInterval = setInterval(update, 1000);
  }

  triggerConfetti() {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#0284c7', '#38bdf8', '#f59e0b', '#10b981', '#f43f5e']
      });

      setTimeout(() => {
        confetti({
          particleCount: 70,
          angle: 60,
          spread: 60,
          origin: { x: 0 },
          colors: ['#f59e0b', '#38bdf8']
        });
        confetti({
          particleCount: 70,
          angle: 120,
          spread: 60,
          origin: { x: 1 },
          colors: ['#10b981', '#0284c7']
        });
      }, 250);
    }
    this.playChimeSound();
    this.showToast('🎉 සුබ ගමන්! Tour Started celebration launched!', 'success');
  }

  playChimeSound() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.frequency.value = freq;
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.12, audioCtx.currentTime + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + idx * 0.1 + 0.35);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(audioCtx.currentTime + idx * 0.1);
        osc.stop(audioCtx.currentTime + idx * 0.1 + 0.35);
      });
    } catch (e) {
      console.log('AudioContext not allowed or not supported yet');
    }
  }

  // --- Leaflet Interactive Map ---
  initMap() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;
    this.map = L.map('map', {
      zoomControl: true,
      scrollWheelZoom: false
    }).setView([8.35, 80.8], 9);

    // Base Tile Layers (100% Free, No API Key Required, No Watermarks)
    const osmStandard = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const osmHot = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      maxZoom: 19,
      subdomains: 'abc',
      attribution: '&copy; OpenStreetMap contributors, Humanitarian style'
    });

    const esriSatellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 18,
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, Earthstar Geographics'
    });

    // Add standard OSM by default
    osmStandard.addTo(this.map);

    // Layer control to toggle between Street map, High-detail map and Satellite view
    const baseMaps = {
      "🗺️ සාමාන්‍ය සිතියම (Standard)": osmStandard,
      "🌿 ගමන් මාර්ග සිතියම (Roads & Terrain)": osmHot,
      "🛰️ චන්ද්‍රිකා සිතියම (Satellite)": esriSatellite
    };
    L.control.layers(baseMaps, null, { position: 'topright' }).addTo(this.map);

    this.renderMapMarkersAndRoute();
  }

  createCustomIcon(number, color) {
    return L.divIcon({
      className: 'custom-leaflet-marker',
      html: `
        <div style="position: relative; display: flex; align-items: center; justify-content: center;">
          <div class="pin-pulse" style="background: ${color}88;"></div>
          <div class="custom-pin" style="background: ${color};">
            <span>${number}</span>
          </div>
        </div>
      `,
      iconSize: [38, 38],
      iconAnchor: [19, 38],
      popupAnchor: [0, -38]
    });
  }

  renderMapMarkersAndRoute() {
    if (!this.map) return;

    this.markers.forEach(m => this.map.removeLayer(m));
    this.markers = [];
    if (this.routePolyline) {
      this.map.removeLayer(this.routePolyline);
      this.routePolyline = null;
    }

    if (this.locations.length === 0) return;

    const latlngs = [];

    this.locations.forEach((loc, index) => {
      const latlng = [loc.lat, loc.lng];
      latlngs.push(latlng);

      const icon = this.createCustomIcon(index + 1, loc.pinColor || '#0284c7');
      const marker = L.marker(latlng, { icon }).addTo(this.map);

      const popupHtml = `
        <div class="p-1 max-w-[240px]">
          <div class="relative h-28 w-full rounded-lg overflow-hidden mb-2">
            <img src="${loc.image}" alt="${loc.name}" class="w-full h-full object-cover"/>
            <span class="absolute top-1.5 left-1.5 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900/80 text-sky-300 border border-sky-400/30">
              නැවතුම #${index + 1}
            </span>
          </div>
          <h4 class="font-bold text-sm text-slate-100 leading-tight mb-0.5">${loc.sinName || loc.name}</h4>
          <p class="text-xs text-amber-400 font-semibold mb-1">${loc.time}</p>
          <p class="text-[11px] text-slate-300 line-clamp-2 mb-3 leading-snug">${loc.description}</p>
          <div class="flex gap-2">
            <button onclick="window.tourApp.triggerProximityAlert('${loc.id}')" class="flex-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-white transition flex items-center justify-center gap-1">
              <span>🔔 Alert</span>
            </button>
            <a href="https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}" target="_blank" class="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition flex items-center justify-center">
              Directions ↗
            </a>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml);
      this.markers.push(marker);
    });

    if (latlngs.length > 1) {
      this.routePolyline = L.polyline(latlngs, {
        color: '#38bdf8',
        weight: 4,
        opacity: 0.9,
        dashArray: '8, 8',
        lineCap: 'round',
        lineJoin: 'round'
      }).addTo(this.map);

      this.map.fitBounds(this.routePolyline.getBounds(), { padding: [50, 50] });
    } else if (latlngs.length === 1) {
      this.map.setView(latlngs[0], 11);
    }
  }

  fitMapBounds() {
    if (this.routePolyline && this.map) {
      this.map.fitBounds(this.routePolyline.getBounds(), { padding: [60, 60] });
    }
  }

  // --- Location Management ---
  addLocation(newLoc) {
    this.locations.push(newLoc);
    this.saveToStorage('tour_locations_v2', this.locations);
    this.renderMapMarkersAndRoute();
    this.renderItinerary();
    this.renderLocationTable();
    this.showToast(`✅ "${newLoc.name}" නව නැවතුම එකතු කරන ලදී!`, 'success');
  }

  deleteLocation(id) {
    const loc = this.locations.find(l => l.id === id);
    if (!loc) return;
    if (confirm(`ඔබට "${loc.name}" නැවතුම ඉවත් කිරීමට අවශ්‍ය බව තහවුරු කරන්නද?`)) {
      this.locations = this.locations.filter(l => l.id !== id);
      this.saveToStorage('tour_locations_v2', this.locations);
      this.renderMapMarkersAndRoute();
      this.renderItinerary();
      this.renderLocationTable();
      this.showToast(`🗑️ "${loc.name}" නැවතුම ඉවත් කරන ලදී`, 'info');
    }
  }

  resetToDefault() {
    if (confirm('සියලු නැවතුම් සහ වියදම් මුල් නිවැරදි සැලැස්මට නැවත සකසන්නද?')) {
      this.locations = JSON.parse(JSON.stringify(DEFAULT_LOCATIONS));
      this.expenses = JSON.parse(JSON.stringify(DEFAULT_EXPENSES));
      this.saveToStorage('tour_locations_v2', this.locations);
      this.saveToStorage('tour_expenses_v2', this.expenses);
      this.renderMapMarkersAndRoute();
      this.renderItinerary();
      this.renderExpenses();
      this.renderLocationTable();
      this.showToast('🔄 සාර්ථකව මුල් සැලැස්ම යාවත්කාලීන විය!', 'success');
    }
  }

  // --- Proximity Alert / Reminders ---
  triggerProximityAlert(id) {
    const loc = this.locations.find(l => l.id === id);
    if (!loc) return;

    const modal = document.getElementById('proximity-modal');
    const modalTitle = document.getElementById('modal-alert-title');
    const modalSin = document.getElementById('modal-alert-sin');
    const modalMsg = document.getElementById('modal-alert-message');
    const modalImg = document.getElementById('modal-alert-image');
    const modalTips = document.getElementById('modal-alert-tips');
    const modalDist = document.getElementById('modal-alert-distance');

    const simDistance = (Math.random() * 2.2 + 0.3).toFixed(1);

    if (modalTitle) modalTitle.innerText = loc.name;
    if (modalSin) modalSin.innerText = loc.sinName || '';
    if (modalMsg) modalMsg.innerText = loc.proximityReminder;
    if (modalImg) modalImg.src = loc.image;
    if (modalTips) modalTips.innerText = loc.tips || 'පවුලේ සියලු දෙනාගේ ආරක්ෂාව සහ විනෝදය තහවුරු කරගන්න!';
    if (modalDist) modalDist.innerText = `ඔබ ආසන්නයේ: ~${simDistance} km (${loc.time})`;

    this.playChimeSound();
    if (modal) modal.classList.remove('hidden');
  }

  closeModal() {
    const modal = document.getElementById('proximity-modal');
    if (modal) modal.classList.add('hidden');
  }

  // --- Itinerary Rendering ---
  switchDayTab(day) {
    this.activeDayTab = day;
    const tab1 = document.getElementById('tab-day-1');
    const tab2 = document.getElementById('tab-day-2');

    if (day === 1) {
      if (tab1) tab1.className = 'px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-ocean-600 to-blue-600 text-white shadow-lg shadow-ocean-600/25 transition cursor-pointer';
      if (tab2) tab2.className = 'px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition cursor-pointer';
    } else {
      if (tab2) tab2.className = 'px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-ocean-600 to-blue-600 text-white shadow-lg shadow-ocean-600/25 transition cursor-pointer';
      if (tab1) tab1.className = 'px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition cursor-pointer';
    }

    this.renderItinerary();
  }

  renderItinerary() {
    const container = document.getElementById('itinerary-cards-container');
    if (!container) return;

    const filtered = this.locations.filter(l => l.day === this.activeDayTab);

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-12 text-center text-slate-400 glass-card rounded-2xl">
          <p class="text-base font-semibold">මෙම දිනය සඳහා නැවතුම් සටහන් කර නොමැත.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map((loc, idx) => {
      const overallIndex = this.locations.findIndex(l => l.id === loc.id) + 1;
      return `
        <div class="glass-card rounded-2xl overflow-hidden border border-slate-700/60 flex flex-col group">
          <div class="relative h-52 w-full overflow-hidden">
            <img src="${loc.image}" alt="${loc.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy"/>
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            
            <!-- Stop Tag & Badge -->
            <div class="absolute top-3 left-3 flex items-center gap-2">
              <span class="w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center text-white shadow-lg shadow-black/40" style="background: ${loc.pinColor || '#0284c7'};">
                #${overallIndex}
              </span>
              <span class="px-2.5 py-1 rounded-lg text-xs font-semibold backdrop-blur-md border ${loc.badgeColor || 'bg-sky-500/20 text-sky-300 border-sky-500/30'}">
                ${loc.category}
              </span>
            </div>

            <!-- Time Slot -->
            <div class="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs font-semibold text-amber-300 bg-slate-900/85 px-3 py-1 rounded-lg backdrop-blur-md border border-amber-500/30 shadow-md">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>${loc.time}</span>
            </div>
          </div>

          <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="font-bold text-base sm:text-lg text-white group-hover:text-sky-300 transition-colors leading-snug">${loc.sinName || loc.name}</h3>
              <p class="text-xs text-amber-400/90 font-medium mt-0.5 mb-2.5">${loc.name}</p>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">${loc.description}</p>
              
              <!-- Quick Tip Bubble -->
              <div class="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-[11px] text-slate-400 mb-4 flex items-start gap-2">
                <span class="text-amber-400 text-xs">💡</span>
                <span>${loc.tips || 'Have safe family fun!'}</span>
              </div>
            </div>

            <div class="pt-3 border-t border-slate-800/80 flex items-center gap-2">
              <button onclick="window.tourApp.triggerProximityAlert('${loc.id}')" class="flex-1 py-2 px-3 rounded-xl text-xs font-semibold bg-sky-500/20 hover:bg-sky-500 text-sky-300 hover:text-white border border-sky-500/30 transition flex items-center justify-center gap-1.5">
                <span>🔔 Proximity Alert</span>
              </button>
              <a href="https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}" target="_blank" class="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition" title="Open Google Maps">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>
              <button onclick="window.tourApp.deleteLocation('${loc.id}')" class="p-2 rounded-xl text-slate-400 hover:text-rose-400 bg-slate-800/50 hover:bg-rose-500/20 border border-slate-700/60 transition" title="Delete Stop">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // --- Expenses & Meal Tracker ---
  addExpense(item) {
    this.expenses.push(item);
    this.saveToStorage('tour_expenses_v2', this.expenses);
    this.renderExpenses();
    this.showToast(`🍲 "${item.name}" වියදම් ලැයිස්තුවට එක් කරන ලදී!`, 'success');
  }

  deleteExpense(id) {
    this.expenses = this.expenses.filter(e => e.id !== id);
    this.saveToStorage('tour_expenses_v2', this.expenses);
    this.renderExpenses();
    this.showToast('🗑️ වියදම ඉවත් කරන ලදී', 'info');
  }

  updateFamilyCount(count) {
    this.familyCount = Math.max(1, count);
    localStorage.setItem('tour_family_count', this.familyCount.toString());
    this.renderExpenses();
  }

  renderExpenses() {
    const listEl = document.getElementById('expense-list');
    const totalEl = document.getElementById('total-budget-lkr');
    const perPersonEl = document.getElementById('per-person-lkr');
    const familyCountInput = document.getElementById('family-member-count');

    if (familyCountInput) familyCountInput.value = this.familyCount;

    const total = this.expenses.reduce((sum, item) => sum + (Number(item.cost) || 0), 0);
    const perPerson = Math.round(total / this.familyCount);

    if (totalEl) totalEl.innerText = `Rs. ${total.toLocaleString('en-US')}`;
    if (perPersonEl) perPersonEl.innerText = `Rs. ${perPerson.toLocaleString('en-US')} / person`;

    if (!listEl) return;

    if (this.expenses.length === 0) {
      listEl.innerHTML = '<p class="text-sm text-slate-500 py-4 text-center">වියදම් සටහන් කර නොමැත.</p>';
      return;
    }

    listEl.innerHTML = this.expenses.map(e => `
      <div class="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition">
        <div class="flex items-center gap-3">
          <span class="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
            e.category === 'Breakfast' ? 'bg-amber-500/20 text-amber-400' :
            e.category === 'Lunch' ? 'bg-emerald-500/20 text-emerald-400' :
            e.category === 'Dinner' ? 'bg-sky-500/20 text-sky-400' :
            e.category === 'Tickets' ? 'bg-purple-500/20 text-purple-400' : 'bg-slate-700/40 text-slate-300'
          }">
            ${e.category === 'Breakfast' ? '🍳' : e.category === 'Lunch' ? '🍛' : e.category === 'Dinner' ? '🦞' : e.category === 'Tickets' ? '🎟️' : '⛽'}
          </span>
          <div>
            <h5 class="text-xs sm:text-sm font-semibold text-slate-200">${e.name}</h5>
            <div class="flex items-center gap-2 text-[11px] text-slate-400">
              <span>Day ${e.day}</span>
              <span>•</span>
              <span class="text-slate-400">${e.category}</span>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-xs sm:text-sm font-bold text-amber-400">Rs. ${(Number(e.cost) || 0).toLocaleString('en-US')}</span>
          <button onclick="window.tourApp.deleteExpense('${e.id}')" class="text-slate-500 hover:text-rose-400 transition" title="Delete">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
      </div>
    `).join('');
  }

  // --- Location Table in Manager Modal / Drawer ---
  renderLocationTable() {
    const tableBody = document.getElementById('location-manager-list');
    if (!tableBody) return;

    tableBody.innerHTML = this.locations.map((loc, idx) => `
      <div class="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800">
        <div class="flex items-center gap-2.5">
          <span class="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold text-white" style="background: ${loc.pinColor || '#0284c7'};">
            ${idx + 1}
          </span>
          <div>
            <h5 class="text-xs font-bold text-slate-200">${loc.sinName || loc.name}</h5>
            <p class="text-[11px] text-slate-400">Day ${loc.day} • ${loc.time}</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="window.tourApp.triggerProximityAlert('${loc.id}')" class="px-2 py-1 rounded-md text-[11px] bg-sky-500/20 text-sky-300 hover:bg-sky-500 hover:text-white transition">
            Test Alert
          </button>
          <button onclick="window.tourApp.deleteLocation('${loc.id}')" class="p-1 rounded-md text-slate-500 hover:text-rose-400 transition">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
        </div>
      </div>
    `).join('');
  }

  // --- Toast Notifications ---
  showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `px-4 py-3 rounded-xl shadow-xl backdrop-blur-md border text-xs font-semibold flex items-center gap-2.5 transition-all duration-300 transform translate-y-2 opacity-0 ${
      type === 'success' ? 'bg-emerald-950/90 text-emerald-200 border-emerald-500/40' :
      type === 'info' ? 'bg-sky-950/90 text-sky-200 border-sky-500/40' :
      'bg-slate-900/90 text-slate-200 border-slate-700'
    }`;
    toast.innerHTML = message;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove('translate-y-2', 'opacity-0');
    }, 10);

    setTimeout(() => {
      toast.classList.add('translate-y-2', 'opacity-0');
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // --- Event Listeners Setup ---
  setupEventListeners() {
    const openAddStopBtn = document.getElementById('btn-open-add-stop');
    const addStopModal = document.getElementById('add-stop-modal');
    const closeAddStopBtn = document.getElementById('btn-close-add-stop');
    const formAddStop = document.getElementById('form-add-stop');

    if (openAddStopBtn && addStopModal) {
      openAddStopBtn.addEventListener('click', () => addStopModal.classList.remove('hidden'));
    }
    if (closeAddStopBtn && addStopModal) {
      closeAddStopBtn.addEventListener('click', () => addStopModal.classList.add('hidden'));
    }

    if (formAddStop) {
      formAddStop.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('stop-name').value.trim();
        const sinName = document.getElementById('stop-sin-name').value.trim();
        const lat = parseFloat(document.getElementById('stop-lat').value);
        const lng = parseFloat(document.getElementById('stop-lng').value);
        const time = document.getElementById('stop-time').value.trim();
        const day = parseInt(document.getElementById('stop-day').value, 10);
        const category = document.getElementById('stop-category').value;
        const description = document.getElementById('stop-desc').value.trim();
        const reminder = document.getElementById('stop-reminder').value.trim();
        const image = document.getElementById('stop-image').value.trim() || 'assets/images/nawagattegama.jpg';

        if (!name || isNaN(lat) || isNaN(lng)) {
          alert('කරුණාකර නම සහ නිවැරදි Latitude/Longitude ඇතුළත් කරන්න.');
          return;
        }

        this.addLocation({
          id: 'loc-' + Date.now(),
          name,
          sinName: sinName || name,
          lat,
          lng,
          time: time || '12:00 PM',
          day: day || 1,
          category: category || 'Custom Stop',
          badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
          pinColor: '#38bdf8',
          image,
          description: description || 'Custom trip highlight added by family.',
          proximityReminder: reminder || '🔔 ඔබ මෙම ස්ථානයට ළඟා වී ඇත! පවුලේ සැමගේ ආරක්ෂාව සලකා බලන්න.',
          tips: 'Enjoy your custom stop with family.'
        });

        formAddStop.reset();
        addStopModal.classList.add('hidden');
      });
    }

    const formAddExpense = document.getElementById('form-add-expense');
    if (formAddExpense) {
      formAddExpense.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('expense-name').value.trim();
        const category = document.getElementById('expense-category').value;
        const day = parseInt(document.getElementById('expense-day').value, 10);
        const cost = parseFloat(document.getElementById('expense-cost').value);

        if (!name || isNaN(cost) || cost <= 0) {
          alert('කරුණාකර වියදමේ විස්තරය සහ වලංගු මුදලක් (LKR) ඇතුළත් කරන්න.');
          return;
        }

        this.addExpense({
          id: 'exp-' + Date.now(),
          name,
          category,
          day,
          cost
        });

        formAddExpense.reset();
      });
    }

    const familyMemberInput = document.getElementById('family-member-count');
    if (familyMemberInput) {
      familyMemberInput.addEventListener('change', (e) => {
        this.updateFamilyCount(parseInt(e.target.value, 10));
      });
    }
  }
}

// Global initialization
window.addEventListener('DOMContentLoaded', () => {
  window.tourApp = new TourApp();
});
