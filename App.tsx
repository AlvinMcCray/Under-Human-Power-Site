import React, { useState, useEffect, useMemo } from 'react';
import { Section, Divider } from './components/Section';
import { Heading, Paragraph, Subtext } from './components/Typography';

type Page = 'home' | 'spot-locations' | 'sponsors';
type SortOrder = 'asc' | 'desc';

interface PageProps {
  navigate: (page: Page) => void;
}

interface LocationEntry {
  date: string; // Format: MM/DD/YYYY
  time: string;
  lat: string;
  long: string;
  note: string;
}

const TopNav: React.FC<{ navigate: (page: Page) => void }> = ({ navigate }) => (
  <nav className="absolute top-0 left-0 w-full py-12 px-6 md:px-12 flex justify-center items-center z-50">
    <div className="flex flex-wrap justify-center gap-6 md:gap-8 font-sans text-xs md:text-sm tracking-widest uppercase text-accent bg-paper/80 backdrop-blur-sm p-4 rounded-full">
      <a href="mailto:UnderHumanPower@yahoo.com" className="hover:text-ink transition-colors">Contact</a>
      <button 
        onClick={() => navigate('sponsors')}
        className="hover:text-ink transition-colors uppercase tracking-widest"
      >
        Sponsors
      </button>
      <button 
        onClick={() => navigate('spot-locations')} 
        className="hover:text-ink transition-colors uppercase tracking-widest"
      >
        Spot Locations
      </button>
      <span className="cursor-default text-stone-300 hidden md:inline">|</span>
      <span className="cursor-default hidden md:inline">MMXXIV</span>
    </div>
  </nav>
);

const Sponsors: React.FC<PageProps> = ({ navigate }) => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto border-b border-stone-200 pb-8 mb-12 flex justify-between items-baseline">
          <h1 className="font-serif text-4xl md:text-5xl text-ink">Sponsors</h1>
          <button 
            onClick={() => navigate('home')}
            className="font-sans text-xs tracking-[0.2em] uppercase text-accent hover:text-ink transition-colors"
          >
            Close
          </button>
        </div>

        <div className="max-w-3xl mx-auto">
           <div className="mb-16">
             <p className="font-serif text-xl italic text-stone-600 leading-relaxed">
               Grateful acknowledgment of the organizations and individuals supporting the journey.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
             {/* Main Sponsors List */}
             <div>
               <Subtext className="mb-8 border-b border-stone-100 pb-2">Expedition Support</Subtext>
               <ul className="space-y-8">
                 <li>
                   <h3 className="font-serif text-xl text-ink">The Kayak Academy</h3>
                 </li>
                 <li>
                   <h3 className="font-serif text-xl text-ink">Beale Paddles</h3>
                 </li>
                 <li>
                   <h3 className="font-serif text-xl text-ink">Rimini Web Design</h3>
                   <span className="font-sans text-xs text-stone-500 uppercase tracking-wider mt-1 block">Rimini Corporation</span>
                 </li>
                 <li>
                   <h3 className="font-serif text-xl text-ink">Spot</h3>
                   <span className="font-sans text-xs text-stone-500 uppercase tracking-wider mt-1 block">Live to Tell About It</span>
                 </li>
                 <li>
                   <h3 className="font-serif text-xl text-ink">Sea Kayak Shop</h3>
                 </li>
                 <li>
                   <h3 className="font-serif text-xl text-ink">Anacortes Kayak Tours</h3>
                 </li>
                 <li>
                   <h3 className="font-serif text-xl text-ink">Odyssey Kayaking</h3>
                   <span className="font-sans text-xs text-stone-500 uppercase tracking-wider mt-1 block">Port Hardy, BC</span>
                 </li>
               </ul>
             </div>

             {/* Endorsements */}
             <div>
               <Subtext className="mb-8 border-b border-stone-100 pb-2">Darrell Endorses</Subtext>
               <div className="space-y-8">
                 <div>
                   <h3 className="font-serif text-xl text-ink mb-3">Cascade Designs</h3>
                   <ul className="font-sans font-light text-stone-600 space-y-1">
                     <li>Thermarest</li>
                     <li>Platypus</li>
                     <li>MSR</li>
                     <li>Seal Line</li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      <footer className="py-24 px-6 md:px-12 text-center border-t border-stone-100">
        <button 
          onClick={() => navigate('home')} 
          className="font-serif italic text-lg text-ink hover:text-stone-500 transition-colors"
        >
          Return to Index
        </button>
      </footer>
    </div>
  );
};

const SpotLocations: React.FC<PageProps> = ({ navigate }) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  // Helper to normalize date for sorting
  const parseDate = (dateStr: string, timeStr: string) => {
    // Handle cases with only Year
    if (dateStr === '2010' || dateStr === '2009') return new Date(`${dateStr}-01-01`).getTime();
    return new Date(`${dateStr} ${timeStr || '00:00'}`).getTime();
  };

  const rawLocations: LocationEntry[] = [
    // --- 2010 Data ---
    { date: '08/04/2010', time: '18:56', lat: '65.59766', long: '-144.00838', note: 'GPS Fix' },
    { date: '08/02/2010', time: '19:03', lat: '65.39503', long: '-142.60472', note: '' },
    { date: '08/01/2010', time: '19:23', lat: '65.20257', long: '-141.73911', note: '' },
    { date: '07/31/2010', time: '18:45', lat: '64.93392', long: '-141.29048', note: '' },
    { date: '07/28/2010', time: '17:54', lat: '64.6302', long: '-140.88108', note: '' },
    { date: '07/27/2010', time: '19:29', lat: '64.42537', long: '-140.53316', note: '' },
    { date: '07/26/2010', time: '17:00', lat: '64.25964', long: '-139.7576', note: '' },
    { date: '07/25/2010', time: '23:33', lat: '64.0687', long: '-139.43809', note: '' },
    { date: '07/24/2010', time: '20:53', lat: '64.06855', long: '-139.43828', note: '' },
    { date: '07/22/2010', time: '22:11', lat: '64.06822', long: '-139.43828', note: '' },
    { date: '07/21/2010', time: '19:37', lat: '63.92065', long: '-139.73491', note: '' },
    { date: '07/20/2010', time: '15:08', lat: '63.92061', long: '-139.73491', note: '' },
    { date: '07/19/2010', time: '16:33', lat: '63.46948', long: '-139.71826', note: '' },
    { date: '07/18/2010', time: '19:18', lat: '63.14964', long: '-139.54849', note: '' },
    { date: '07/17/2010', time: '17:02', lat: '62.88659', long: '-138.91382', note: '' },
    { date: '07/16/2010', time: '18:34', lat: '62.81066', long: '-137.98794', note: '' },
    { date: '07/15/2010', time: '18:44', lat: '62.77637', long: '-137.39292', note: '' },
    { date: '07/15/2010', time: '18:20', lat: '62.77642', long: '-137.39287', note: '' },
    { date: '07/14/2010', time: '18:38', lat: '62.46851', long: '-136.72556', note: '' },
    { date: '07/13/2010', time: '20:03', lat: '62.13348', long: '-136.34934', note: '' },
    { date: '07/11/2010', time: '17:43', lat: '62.09362', long: '-136.27287', note: '' },
    { date: '07/10/2010', time: '21:34', lat: '61.98867', long: '-135.42186', note: '' },
    { date: '07/09/2010', time: '19:43', lat: '61.98881', long: '-135.42188', note: '' },
    { date: '07/08/2010', time: '18:03', lat: '61.80876', long: '-135.00075', note: '' },
    { date: '07/07/2010', time: '19:19', lat: '61.56906', long: '-134.99401', note: '' },
    { date: '07/06/2010', time: '18:00', lat: '61.39247', long: '-135.23009', note: '' },
    { date: '07/05/2010', time: '17:24', lat: '61.1116', long: '-135.08888', note: '' },
    { date: '07/04/2010', time: '19:32', lat: '60.91946', long: '-135.11549', note: '' },
    { date: '07/03/2010', time: '19:49', lat: '60.70219', long: '-135.0465', note: '' },
    { date: '07/01/2010', time: '22:07', lat: '60.71367', long: '-135.05337', note: '' },
    { date: '06/30/2010', time: '21:02', lat: '60.70233', long: '-135.04618', note: '' },
    { date: '06/29/2010', time: '14:57', lat: '60.62903', long: '-134.96775', note: '' },
    { date: '06/28/2010', time: '21:54', lat: '60.59207', long: '-134.71663', note: '' },
    { date: '06/27/2010', time: '20:47', lat: '60.59221', long: '-134.71667', note: '' },
    { date: '06/26/2010', time: '20:42', lat: '60.4444', long: '-134.31726', note: '' },
    { date: '06/25/2010', time: '20:45', lat: '60.44441', long: '-134.31735', note: '' },
    { date: '06/24/2010', time: '22:18', lat: '60.31586', long: '-134.2598', note: '' },
    { date: '06/23/2010', time: '20:10', lat: '60.22212', long: '-134.31805', note: '' },
    { date: '06/23/2010', time: '11:45', lat: '60.16442', long: '-134.70901', note: '' },
    { date: '06/22/2010', time: '14:14', lat: '60.15617', long: '-134.75064', note: '' },
    { date: '06/21/2010', time: '19:50', lat: '59.98291', long: '-134.9111', note: '' },
    { date: '06/20/2010', time: '22:28', lat: '59.8461', long: '-134.99964', note: '' },
    { date: '06/19/2010', time: '20:06', lat: '59.84643', long: '-134.99968', note: '' },
    { date: '06/18/2010', time: '18:03', lat: '59.73813', long: '-135.17733', note: '' },
    { date: '06/17/2010', time: '18:43', lat: '59.65879', long: '-135.26805', note: '' },
    { date: '06/16/2010', time: '19:46', lat: '59.5758', long: '-135.33566', note: '' },
    { date: '06/16/2010', time: '12:47', lat: '59.51205', long: '-135.34656', note: '' },
    
    // 2010 Undated (Late Summer) - Placed after August based on log context
    { date: '08/05/2010', time: '', lat: '65.82501', long: '-144.06125', note: 'Undated Log' },
    { date: '08/06/2010', time: '', lat: '66.10545', long: '-144.44176', note: 'Undated Log' },
    { date: '08/07/2010', time: '', lat: '66.51966', long: '-145.17795', note: 'Undated Log' },
    { date: '08/08/2010', time: '', lat: '66.56243', long: '-145.26848', note: 'Undated Log' },
    { date: '08/09/2010', time: '', lat: '66.56769', long: '-145.25659', note: 'Undated Log' },
    { date: '08/10/2010', time: '', lat: '66.53009', long: '-146.31259', note: 'Undated Log' },
    { date: '08/11/2010', time: '', lat: '66.32633', long: '-147.584', note: 'Undated Log' },
    { date: '08/12/2010', time: '', lat: '66.11875', long: '-148.63283', note: 'Undated Log' },
    { date: '08/13/2010', time: '', lat: '65.87601', long: '-149.70212', note: 'Undated Log' },
    { date: '08/14/2010', time: '', lat: '64.85928', long: '-147.78714', note: 'Undated Log' },

    // --- 2009 Data ---
    { date: '09/11/2009', time: '16:27', lat: '48.7211', long: '-122.5132', note: '' },
    { date: '09/10/2009', time: '17:19', lat: '52.1842', long: '-128.1053', note: '' },
    { date: '09/10/2009', time: '00:58', lat: '55.3538', long: '-131.6957', note: '' },
    { date: '09/09/2009', time: '16:43', lat: '56.4739', long: '-132.3918', note: '' },
    { date: '09/09/2009', time: '12:38', lat: '56.8088', long: '-132.9754', note: '' },
    { date: '09/09/2009', time: '02:32', lat: '57.1296', long: '-135.3819', note: '' },
    { date: '09/08/2009', time: '13:55', lat: '58.3812', long: '-134.6841', note: '' },
    { date: '09/08/2009', time: '02:30', lat: '59.2822', long: '-135.4625', note: '' },
    { date: '09/07/2009', time: '04:38', lat: '59.1722', long: '-135.3985', note: '' },
    { date: '09/06/2009', time: '04:36', lat: '59.1723', long: '-135.3985', note: '' },
    { date: '09/01/2009', time: '21:40', lat: '59.4504', long: '-135.3181', note: '' },
    { date: '09/01/2009', time: '01:05', lat: '59.2355', long: '-135.4419', note: '' },
    { date: '08/31/2009', time: '02:26', lat: '59.2355', long: '-135.4419', note: '' },
    { date: '08/30/2009', time: '02:19', lat: '59.0917', long: '-135.3204', note: '' },
    { date: '08/28/2009', time: '23:33', lat: '58.9354', long: '-135.3318', note: '' },
    { date: '08/28/2009', time: '01:02', lat: '58.732', long: '-135.2336', note: '' },
    { date: '08/27/2009', time: '02:34', lat: '58.6164', long: '-135.1464', note: '' },
    { date: '08/27/2009', time: '01:17', lat: '58.5817', long: '-135.1371', note: '' },
    { date: '08/26/2009', time: '02:11', lat: '58.3753', long: '-134.7268', note: '' },
    { date: '08/25/2009', time: '05:44', lat: '58.2901', long: '-134.4279', note: '' },
    { date: '08/23/2009', time: '04:24', lat: '58.2902', long: '-134.4279', note: '' },
    { date: '08/21/2009', time: '22:05', lat: '58.3035', long: '-134.4287', note: '' },
    { date: '08/21/2009', time: '01:35', lat: '58.1093', long: '-134.3097', note: '' },
    { date: '08/19/2009', time: '23:45', lat: '58.0972', long: '-134.317', note: '' },
    { date: '08/17/2009', time: '00:09', lat: '57.7333', long: '-134.1101', note: '' },
    { date: '08/15/2009', time: '23:28', lat: '57.6189', long: '-133.9435', note: '' },
    { date: '08/15/2009', time: '01:32', lat: '57.4262', long: '-133.926', note: '' },
    { date: '08/14/2009', time: '02:51', lat: '57.4262', long: '-133.926', note: '' },
    { date: '08/13/2009', time: '02:12', lat: '57.4261', long: '-133.9266', note: '' },
    { date: '08/11/2009', time: '23:32', lat: '57.2774', long: '-133.8494', note: '' },
    { date: '08/11/2009', time: '21:26', lat: '57.297', long: '-133.8071', note: '' },
    { date: '08/11/2009', time: '17:44', lat: '57.2736', long: '-133.6341', note: '' },
    { date: '08/11/2009', time: '01:56', lat: '57.2575', long: '-133.5297', note: '' },
    { date: '08/10/2009', time: '01:08', lat: '57.1346', long: '-133.3966', note: '' },
    { date: '08/09/2009', time: '02:28', lat: '56.9843', long: '-133.0716', note: '' },
    { date: '08/08/2009', time: '05:34', lat: '56.8105', long: '-132.9541', note: '' },
    { date: '08/06/2009', time: '21:51', lat: '56.8108', long: '-132.9542', note: '' },
    { date: '08/04/2009', time: '05:36', lat: '56.4722', long: '-132.3827', note: '' },
    { date: '08/03/2009', time: '05:49', lat: '56.4722', long: '-132.3829', note: '' },
    { date: '08/01/2009', time: '01:07', lat: '48.7221', long: '-122.5123', note: '' },
    { date: '07/31/2009', time: '18:29', lat: '47.4965', long: '-122.0904', note: 'First 2009 Transmission (Issaquah)' },

    // --- 2008 Data ---
    { date: '08/24/2008', time: '03:33', lat: '47.5445', long: '-122.5045', note: 'Return Journey' },
    { date: '08/23/2008', time: '02:33', lat: '47.9072', long: '-122.2439', note: 'SEATTLE, WA' },
    { date: '08/22/2008', time: '05:10', lat: '50.0555', long: '-125.2421', note: '' },
    { date: '08/21/2008', time: '16:50', lat: '52.1653', long: '-128.1311', note: '' },
    { date: '08/21/2008', time: '01:08', lat: '55.3514', long: '-131.6921', note: '' },
    { date: '08/18/2008', time: '02:36', lat: '56.4724', long: '-132.3831', note: 'Return Ferry' },
    { date: '08/17/2008', time: '02:43', lat: '56.3449', long: '-132.3489', note: 'Return Ferry' },
    { date: '08/16/2008', time: '21:00', lat: '56.1879', long: '-132.2201', note: 'Return Ferry' },
    { date: '08/16/2008', time: '01:31', lat: '56.1083', long: '-132.0755', note: 'Return Ferry' },
    { date: '08/14/2008', time: '23:43', lat: '55.8653', long: '-132.0802', note: 'Return Ferry' },
    { date: '08/14/2008', time: '17:26', lat: '55.7677', long: '-132.283', note: 'Return Ferry' },
    { date: '08/12/2008', time: '02:22', lat: '55.6224', long: '-132.1995', note: 'Return Ferry' },
    { date: '08/10/2008', time: '17:38', lat: '55.3442', long: '-131.6511', note: 'Return Ferry' },
    { date: '08/08/2008', time: '14:56', lat: '55.3444', long: '-131.6514', note: 'Return Ferry' },
    { date: '08/07/2008', time: '04:22', lat: '55.4735', long: '-131.7945', note: 'Return Ferry' },
    { date: '08/05/2008', time: '23:01', lat: '55.711', long: '-131.7181', note: 'Return Ferry' },
    { date: '08/05/2008', time: '00:30', lat: '55.9306', long: '-131.566', note: 'Bell Island Hot Springs (0km)' },
    { date: '08/04/2008', time: '01:44', lat: '55.9839', long: '-131.1814', note: 'Bell Island Hot Springs (25km)' },
    { date: '08/03/2008', time: '03:14', lat: '55.7134', long: '-130.9022', note: '' },
    { date: '08/01/2008', time: '00:49', lat: '55.4414', long: '-130.9169', note: '' },
    { date: '07/30/2008', time: '23:47', lat: '55.2962', long: '-130.8942', note: '' },
    { date: '07/28/2008', time: '02:44', lat: '54.9403', long: '-130.9434', note: '' },
    { date: '07/27/2008', time: '19:12', lat: '54.7685', long: '-130.7321', note: '' },
    { date: '07/27/2008', time: '01:29', lat: '54.612', long: '-130.4537', note: '' },
    { date: '07/21/2008', time: '21:57', lat: '54.3195', long: '-130.3194', note: '' },
    { date: '07/20/2008', time: '19:56', lat: '54.0257', long: '-130.2578', note: '' },
    { date: '07/18/2008', time: '22:00', lat: '53.8573', long: '-130.0285', note: '' },
    { date: '07/17/2008', time: '23:01', lat: '53.6696', long: '-129.7582', note: '' },
    { date: '07/15/2008', time: '00:48', lat: '53.4249', long: '-129.2506', note: '' },
    { date: '07/14/2008', time: '00:03', lat: '53.2881', long: '-128.9301', note: '' },
    { date: '07/13/2008', time: '01:49', lat: '53.1601', long: '-128.6959', note: '' },
    { date: '07/12/2008', time: '01:02', lat: '52.8618', long: '-128.4935', note: '' },
    { date: '07/11/2008', time: '01:21', lat: '52.5931', long: '-128.5225', note: '' },
    { date: '07/10/2008', time: '00:39', lat: '52.3645', long: '-128.339', note: '' },
    { date: '07/09/2008', time: '03:54', lat: '52.1606', long: '-128.1436', note: '' },
    { date: '07/08/2008', time: '04:58', lat: '52.1604', long: '-128.1438', note: '' },
    { date: '07/07/2008', time: '05:58', lat: '52.1604', long: '-128.1438', note: '' },
    { date: '07/05/2008', time: '22:13', lat: '52.1604', long: '-128.1435', note: '' },
    { date: '07/05/2008', time: '02:33', lat: '52.0611', long: '-127.9486', note: '' },
    { date: '07/04/2008', time: '16:43', lat: '51.9258', long: '-127.9065', note: '' },
    { date: '07/04/2008', time: '15:15', lat: '51.8775', long: '-127.8899', note: '' },
    { date: '07/03/2008', time: '22:43', lat: '51.7717', long: '-127.8748', note: '' },
    { date: '07/03/2008', time: '01:36', lat: '51.7719', long: '-127.8759', note: '' },
    { date: '07/01/2008', time: '23:54', lat: '51.4857', long: '-127.7619', note: '' },
    { date: '06/30/2008', time: '20:31', lat: '51.3682', long: '-127.7757', note: '' },
    { date: '06/30/2008', time: '19:30', lat: '51.3486', long: '-127.7948', note: '' },
    { date: '06/30/2008', time: '17:31', lat: '51.2967', long: '-127.7036', note: '' },
    { date: '06/30/2008', time: '14:36', lat: '51.25', long: '-127.7623', note: '' },
    { date: '06/30/2008', time: '14:26', lat: '51.2371', long: '-127.7835', note: '' },
    { date: '06/29/2008', time: '23:01', lat: '51.1401', long: '-127.7215', note: '' },
    { date: '06/28/2008', time: '20:10', lat: '51.1415', long: '-127.7034', note: '' },
    { date: '06/28/2008', time: '18:24', lat: '51.1317', long: '-127.7054', note: 'Shushartie (33km)' },
    { date: '06/27/2008', time: '22:27', lat: '50.9965', long: '-127.5152', note: '' },
    { date: '06/27/2008', time: '02:49', lat: '50.7204', long: '-127.4909', note: 'Port Hardy (5km)' },
    { date: '06/26/2008', time: '03:42', lat: '50.7206', long: '-127.491', note: 'Port Hardy (6km)' },
    { date: '06/23/2008', time: '00:43', lat: '50.6144', long: '-127.1772', note: 'Port McNeill (6km)' },
    { date: '06/22/2008', time: '00:30', lat: '50.5405', long: '-126.7845', note: '' },
    { date: '06/21/2008', time: '23:37', lat: '50.5404', long: '-126.7847', note: 'Telegraph Cove (4km)' },
    { date: '06/21/2008', time: '22:27', lat: '50.5405', long: '-126.7847', note: 'Telegraph Cove (4km)' },
    { date: '06/20/2008', time: '23:21', lat: '50.4778', long: '-126.4271', note: '' },
    { date: '06/19/2008', time: '04:52', lat: '50.4458', long: '-125.4723', note: '' },
    { date: '06/17/2008', time: '18:55', lat: '50.4131', long: '-125.5029', note: '' },
    { date: '06/17/2008', time: '12:27', lat: '50.4287', long: '-125.2437', note: '' },
    { date: '06/17/2008', time: '01:13', lat: '50.3915', long: '-125.1317', note: '' },
    { date: '06/16/2008', time: '01:45', lat: '50.2564', long: '-125.0334', note: '' },
    { date: '06/15/2008', time: '00:44', lat: '50.0263', long: '-124.8249', note: '' },
    { date: '06/14/2008', time: '02:43', lat: '49.8473', long: '-124.5303', note: 'Powell River (1km)' },
    { date: '06/13/2008', time: '04:43', lat: '49.8475', long: '-124.5322', note: 'Powell River (0km)' },
    { date: '06/12/2008', time: '01:33', lat: '49.8468', long: '-124.5319', note: 'Powell River (0km)' },
    { date: '06/11/2008', time: '00:23', lat: '49.6575', long: '-124.4662', note: 'Marshall School Junction (7km)' },
    { date: '06/10/2008', time: '01:31', lat: '49.6574', long: '-124.4663', note: '' },
    { date: '06/09/2008', time: '01:50', lat: '49.5894', long: '-124.3575', note: 'Billings Bay (17km)' },
    { date: '06/08/2008', time: '18:48', lat: '49.4257', long: '-124.1954', note: 'Parksville (15km)' },
    { date: '06/08/2008', time: '02:08', lat: '49.3385', long: '-124.147', note: '' },
    { date: '06/07/2008', time: '05:55', lat: '49.1857', long: '-123.9249', note: '' },
    { date: '06/05/2008', time: '03:28', lat: '49.1846', long: '-123.9262', note: '' },
    { date: '06/04/2008', time: '03:04', lat: '49.0537', long: '-123.6557', note: '' },
    { date: '06/03/2008', time: '04:37', lat: '48.8405', long: '-123.3993', note: 'Saturna (15km)' },
    { date: '06/02/2008', time: '01:45', lat: '48.754', long: '-123.2407', note: 'Saturna (6km)' },
    { date: '06/01/2008', time: '02:12', lat: '48.6182', long: '-123.168', note: 'Roche Harbor (2km)' },
    { date: '06/01/2008', time: '01:56', lat: '48.6182', long: '-123.168', note: '' },
    { date: '05/31/2008', time: '02:25', lat: '48.5389', long: '-122.8591', note: '' },
    { date: '05/30/2008', time: '02:44', lat: '48.5104', long: '-122.6062', note: 'Seafarers Way, Anacortes' },
    { date: '05/26/2008', time: '16:54', lat: '48.5078', long: '-122.6122', note: '' },
  ];

  const sortedLocations = useMemo(() => {
    return [...rawLocations].sort((a, b) => {
      const timeA = parseDate(a.date, a.time);
      const timeB = parseDate(b.date, b.time);
      return sortOrder === 'asc' ? timeA - timeB : timeB - timeA;
    });
  }, [rawLocations, sortOrder]);

  const toggleSort = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="animate-in fade-in duration-700">
      <section className="pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto border-b border-stone-200 pb-8 mb-12 flex justify-between items-baseline">
          <h1 className="font-serif text-4xl md:text-5xl text-ink">Spot Locations</h1>
          <button 
            onClick={() => navigate('home')}
            className="font-sans text-xs tracking-[0.2em] uppercase text-accent hover:text-ink transition-colors"
          >
            Close Map
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 mb-20">
             <div className="space-y-8">
               <div className="prose prose-stone prose-sm">
                 <h3 className="font-serif text-lg text-ink italic mb-2">What is a SPOT Location?</h3>
                 <p className="font-sans font-light text-stone-600 mb-6">
                   Darrell has been using a SPOT device to help track his progress. This device sends a signal to a satellite, which transmits that signal to the SPOT computer. The SPOT computer then posts Darrell's location on a map on their website. He does this each night when he has found a campsite. Sometimes he has been able to send SPOT signals during his passage across a strait or up various channels.
                 </p>
                 <h3 className="font-serif text-lg text-ink italic mb-2">Returning Home</h3>
                 <p className="font-sans font-light text-stone-600">
                   All the signal transmissions from August 20th 2008 on reflect Darrell's return on the Inside Passage Ferry.
                 </p>
               </div>
             </div>

             <div>
               <Subtext>Transmission Log</Subtext>
               <Paragraph className="text-base md:text-lg mb-8">
                 Coordinates broadcast via satellite beacon. These points represent verifiable moments of presence in the landscape.
               </Paragraph>
               
               <div className="space-y-0 max-h-[100vh] overflow-y-auto pr-2 scrollbar-hide">
                 <div className="grid grid-cols-[100px_1fr_1fr] md:grid-cols-[120px_150px_1fr] gap-4 py-3 border-b border-stone-800 text-xs font-sans tracking-widest uppercase text-ink font-medium sticky top-0 bg-paper z-10">
                    <button 
                      onClick={toggleSort}
                      className="text-left hover:text-stone-500 transition-colors flex items-center gap-1 group"
                    >
                      Date
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                        {sortOrder === 'asc' ? '↑' : '↓'}
                      </span>
                    </button>
                    <span>Coordinates</span>
                    <span>Note</span>
                 </div>
                 {sortedLocations.map((loc, i) => (
                   <React.Fragment key={i}>
                     <div className="grid grid-cols-[100px_1fr_1fr] md:grid-cols-[120px_150px_1fr] gap-4 py-3 border-b border-stone-200 font-sans text-sm text-stone-600 hover:bg-stone-50 transition-colors -mx-2 px-2 group">
                       <span className="text-accent text-xs pt-0.5 whitespace-nowrap">{loc.date}</span>
                       <a 
                         href={`http://maps.google.com/maps?q=${loc.lat},${loc.long}`} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="font-mono text-xs text-stone-500 pt-0.5 group-hover:text-ink transition-colors underline decoration-stone-300 underline-offset-2"
                       >
                         {loc.lat}, {loc.long}
                       </a>
                       <span className="text-xs md:text-sm truncate">{loc.note}</span>
                     </div>
                   </React.Fragment>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </section>

      <footer className="py-24 px-6 md:px-12 text-center border-t border-stone-100">
        <button 
          onClick={() => navigate('home')} 
          className="font-serif italic text-lg text-ink hover:text-stone-500 transition-colors"
        >
          Return to Index
        </button>
      </footer>
    </div>
  );
};

const Home: React.FC<PageProps> = ({ navigate }) => {
  return (
    <div className="animate-in fade-in duration-700 relative">
      <TopNav navigate={navigate} />
      
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-24 pb-12">
        <div className="max-w-7xl mx-auto w-full">
          {/* Top Subtext */}
          <p className="font-sans text-xs md:text-sm tracking-[0.2em] text-accent uppercase mb-12 md:mb-16 border-b border-accent/20 pb-4 inline-block">
            From the Mexican border to the Arctic Ocean
          </p>
          
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-24">
            {/* Left Column: Title */}
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.95] text-ink tracking-tight shrink-0">
              Under<br />
              Human<br />
              Power.
            </h1>

            {/* Right Column: Image and Quote */}
            <div className="flex flex-col gap-10 max-w-lg lg:pt-4">
               {/* Image Container */}
              <div className="aspect-[4/3] bg-stone-200 relative overflow-hidden grayscale-[20%] hover:grayscale-0 transition-all duration-700 shadow-sm">
                <img 
                  src="darrell-kayak.jpg" 
                  alt="Darrell J. Gardner in his kayak" 
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="border-l-2 border-accent/30 pl-6 md:pl-8 py-2">
                <p className="font-serif italic text-xl md:text-2xl text-stone-600 leading-relaxed">
                  "Life has taught me the importance of balancing my innermost dreams with daily service to community and Mother Earth."
                  <span className="block mt-4 text-sm font-sans tracking-widest uppercase text-accent not-italic">~ Darrell J. Gardner</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <Section>
        <Subtext>The Quest</Subtext>
        <Paragraph>
          As a registered nurse, I am reminded daily of life’s brevity.  Patients have often shared with me their regrets of dreams unrealized…that life without balance has a steep price.  This awareness became personalized when my father passed away early in his retirement. His death brought into focus my life-long dream…a single expedition that would challenge me to use all my outdoor experiences. Being in nature allows me to reach that innermost point of balance by becoming part of its rhythm. Traveling Under Human Power rejuvenates my soul and gives me a perspective like no other.
        </Paragraph>
        <Paragraph>
          In 2008, I will sea kayak the entire Inside Passage, 1,400 miles.  This is just one stage of the expedition where hiking, kayaking, canoeing, cross-country skiing and snowshoeing will propel me over 5,700 contiguous miles, Under Human Power, from Mexico to the Arctic Ocean. That is the Quest!
        </Paragraph>
      </Section>

      <div className="flex justify-center">
        <span className="font-serif italic text-accent text-2xl">§</span>
      </div>

      {/* Timeline Section */}
      <Section>
        <Subtext>Timeline</Subtext>
        <div className="space-y-16 mt-12">
          
          {/* Stage I */}
          <div>
            <h3 className="font-serif text-2xl text-ink mb-2">Stage I — The Pacific Crest Trail</h3>
            <p className="font-sans text-xs tracking-widest uppercase text-accent mb-4">CA, OR & WA • 2,650 miles • 2004 & 2005</p>
            <p className="font-sans font-light text-stone-700 leading-relaxed max-w-prose">
              I hiked solo the entire length of the United States from Mexico to Canada. Taking over five million steps.
            </p>
          </div>

          {/* Stage II */}
          <div>
            <h3 className="font-serif text-2xl text-ink mb-2">Stage II — "The Bridge"</h3>
            <p className="font-sans text-xs tracking-widest uppercase text-accent mb-4">WA • 250 miles • 2006</p>
            <p className="font-sans font-light text-stone-700 leading-relaxed max-w-prose">
              I connected the land to the sea via the Pacific Northwest Trail & the Skagit River. Hiking over the snow covered passes of the Northern Cascade Mountains, I followed the summer run off down the Skagit River by canoe into the Puget Sound.
            </p>
          </div>

          {/* Stage III */}
          <div>
            <h3 className="font-serif text-2xl text-ink mb-2">Stage III — The Inside Passage</h3>
            <p className="font-sans text-xs tracking-widest uppercase text-accent mb-4">WA, BC & AK • 1,400 miles • 2008-2009</p>
            <p className="font-sans font-light text-stone-700 leading-relaxed max-w-prose">
              Facing one of my most serious challenges, I solo sea kayaked up the Inside Passage from Seattle, WA to Skagway, AK.
            </p>
          </div>

          {/* Stage IV */}
          <div>
            <h3 className="font-serif text-2xl text-ink mb-2">Stage IV — The Yukon River</h3>
            <p className="font-sans text-xs tracking-widest uppercase text-accent mb-4">AK, BC & YT • 900 miles • 2010</p>
            <p className="font-sans font-light text-stone-700 leading-relaxed max-w-prose">
              This summer I will access the interior of Alaska by hiking the Chilkoot Trail to the head waters of the Yukon River. Then I will travel by canoe as the Yukon flows NW through northern British Columbia, the Yukon Territory and back into Alaska to its most northern point at Fort Yukon, Alaska.
            </p>
          </div>

          {/* Stage V & VI */}
          <div>
            <h3 className="font-serif text-2xl text-ink mb-2">Stages V & VI — The Brooks Range & Arctic Ocean</h3>
            <p className="font-sans text-xs tracking-widest uppercase text-accent mb-4">Alaska • 500 miles • 2011</p>
            <p className="font-sans font-light text-stone-700 leading-relaxed max-w-prose">
              The final push! In the spring, I will snowshoe and cross country ski to the top the Brooks Range near Atigun Pass. In the summer, I will return to traverse the peaks of the Gates of the Arctic NP and connect with a tributary of the Colville River at the village of Anaktuvuk Pass. This tributary is part of the Colville River drainage and flows down the north slope of the Brooks Range to Alaska's Arctic coast. The Colville river meets the Arctic Ocean near Oliktok Point about 40 miles west of Prudhoe Bay.
            </p>
          </div>

        </div>
      </Section>

      {/* Image / Pause Section */}
      <div className="w-full px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto aspect-[16/9] bg-stone-100 relative overflow-hidden grayscale contrast-[0.9] brightness-[1.05]">
          <img 
            src="https://picsum.photos/1600/900" 
            alt="A landscape showing a solitary path" 
            className="object-cover w-full h-full opacity-80"
          />
          <div className="absolute inset-0 bg-paper/10 mix-blend-multiply"></div>
        </div>
        <p className="text-center font-sans text-xs text-accent mt-4 tracking-widest uppercase">Fig 1. The unpaved route</p>
      </div>

      <Divider />

      {/* Reflective Section */}
      <Section>
        <Subtext>Reflection</Subtext>
        <Heading>Why this, why now?</Heading>
        <Paragraph>
           We are forgetting how to be tired. Real, physical tiredness is becoming a luxury commodity, simulated in gyms and manufactured in studios.
        </Paragraph>
        <Paragraph>
          This project exists to document the reclaiming of that fatigue. The good tiredness that comes from building, walking, carrying, and repairing. It is an argument for the dignity of manual competence in an automated age.
        </Paragraph>
      </Section>

      {/* About Section */}
      <Section className="bg-stone-100/50 mt-12">
        <div className="md:pl-8 border-l-2 border-stone-300">
          <Subtext>About</Subtext>
          <p className="font-serif text-xl md:text-2xl leading-relaxed text-ink mt-6 mb-8">
            I live in the high desert of Northern New Mexico. When I am not on my expedition, I can be found working as a registered nurse at Christus - St. Vincent Regional Medical Center in Santa Fe.
          </p>
          <p className="font-sans text-lg text-stone-600">
             Please contact me by email at:<br />
             <a href="mailto:UnderHumanPower@yahoo.com" className="text-ink underline decoration-stone-300 underline-offset-4 hover:decoration-ink transition-all">UnderHumanPower@yahoo.com</a>
          </p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-24 px-6 md:px-12 text-center">
        <p className="font-serif italic text-lg mb-8 text-ink">Under Human Power</p>
        <div className="flex justify-center flex-wrap gap-8 font-sans text-sm tracking-widest uppercase text-accent">
          <a href="mailto:UnderHumanPower@yahoo.com" className="hover:text-ink transition-colors">Contact</a>
          <button 
            onClick={() => navigate('sponsors')} 
            className="hover:text-ink transition-colors uppercase tracking-widest"
          >
            Sponsors
          </button>
          <button 
            onClick={() => navigate('spot-locations')} 
            className="hover:text-ink transition-colors uppercase tracking-widest"
          >
            Spot Locations
          </button>
          <span className="cursor-default text-stone-300">|</span>
          <span className="cursor-default">MMXXIV</span>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [page]);

  return (
    <div className="min-h-screen bg-paper selection:bg-stone-200">
      {page === 'home' ? (
        <Home navigate={setPage} />
      ) : page === 'spot-locations' ? (
        <SpotLocations navigate={setPage} />
      ) : (
        <Sponsors navigate={setPage} />
      )}
    </div>
  );
};

export default App;