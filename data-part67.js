const PART67_DATA = [
  {
    title: "ビジネスメール：会議日程変更",
    passage: `<p>From: Sarah Mitchell &lt;s.mitchell@globaltech.com&gt;<br>To: All Staff<br>Subject: Change of Meeting Schedule</p>
<p>Dear Team,</p>
<p>I am writing to inform you that the quarterly review meeting originally scheduled for Thursday, May 15, has been <strong>[1]</strong> to Friday, May 16, due to a conflict with the CEO's travel schedule. The meeting will still be held in Conference Room B at 2:00 P.M.</p>
<p>Please note that the agenda remains unchanged. All department heads are expected to prepare a brief summary of their team's performance for the past quarter. <strong>[2]</strong>, if you have any items you would like to add to the agenda, please send them to me by Wednesday noon.</p>
<p>We apologize for any inconvenience this change may cause. If you have any questions, please do not hesitate to contact me directly.</p>
<p>Best regards,<br>Sarah Mitchell<br>Executive Assistant</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["canceled","postponed","rescheduled","moved"], answer:2, explanation:"「別の日時に再設定された」という文脈。rescheduled（再スケジュールされた）が最も適切。moved も可だが rescheduled がより正式。"},
      {question:"What word or phrase best fills blank [2]?", choices:["However","In addition","Therefore","As a result"], answer:1, explanation:"前の文に追加情報を加える文脈。In addition（さらに）が正解。"},
      {question:"What is the purpose of this email?", choices:["To cancel a meeting","To announce a meeting date change","To confirm a meeting agenda","To request attendance confirmation"], answer:1, explanation:"メールの主な目的は会議日程の変更を通知すること。announce a meeting date change が正解。"},
      {question:"What must department heads prepare for the meeting?", choices:["A budget proposal","A performance summary","A new agenda","A travel report"], answer:1, explanation:"「過去四半期のチームのパフォーマンスの要約を準備することが求められている」と明記されている。"}
    ]
  },
  {
    title: "社内通知：新しい経費精算ポリシー",
    passage: `<p><strong>INTERNAL MEMO</strong></p>
<p>To: All Employees<br>From: Finance Department<br>Date: June 1<br>Re: Updated Expense Reimbursement Policy</p>
<p>Effective July 1, the company will implement a new expense reimbursement policy. Under the new policy, all expense reports must be submitted <strong>[1]</strong> 30 days of the date expenses were incurred. Reports submitted after this deadline will not be processed.</p>
<p>All receipts must be attached to the expense report. Expenses without receipts will not be reimbursed, with the exception of meals under $10. <strong>[2]</strong>, employees who travel internationally must submit their reports in U.S. dollars, using the exchange rate on the date of purchase.</p>
<p>Please review the full policy document available on the company intranet. For questions, contact finance@company.com.</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["until","within","by","after"], answer:1, explanation:"「費用発生日から30日以内に提出する」という期間の表現。within（〜以内に）が正解。"},
      {question:"What word best fills blank [2]?", choices:["However","In addition","Otherwise","As a result"], answer:1, explanation:"追加のルールを述べる文脈。In addition（さらに）が正解。"},
      {question:"When does the new policy take effect?", choices:["June 1","July 1","June 30","August 1"], answer:1, explanation:"「Effective July 1」と明記されている。"},
      {question:"Which expenses do NOT require a receipt?", choices:["International travel","Meals under $10","Hotel stays","Transportation"], answer:1, explanation:"「$10未満の食事を除き、レシートなしでは精算されない」と明記されている。"}
    ]
  },
  {
    title: "広告：人材募集",
    passage: `<p><strong>JOB POSTING: Marketing Manager</strong><br>Apex Solutions Inc. | Full-time | Tokyo, Japan</p>
<p>Apex Solutions Inc. is seeking an experienced Marketing Manager to lead our brand development and digital marketing initiatives. The successful candidate will be <strong>[1]</strong> for overseeing all marketing campaigns, managing a team of eight specialists, and collaborating with the sales department to drive revenue growth.</p>
<p><strong>Requirements:</strong></p>
<ul>
<li>A minimum of five years of experience in marketing or a related field</li>
<li>Proven track record of successful campaign management</li>
<li>Excellent written and verbal communication skills</li>
<li>Experience with digital marketing tools and social media platforms</li>
</ul>
<p><strong>[2]</strong> a competitive salary, we offer performance bonuses, health insurance, and 20 days of paid vacation per year.</p>
<p>To apply, submit your resume and cover letter to careers@apexsolutions.co.jp by June 30.</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["responsible","accountable","reliable","capable"], answer:0, explanation:"be responsible for（〜に責任を持つ）は役職説明の固定表現。responsible が正解。"},
      {question:"What phrase best fills blank [2]?", choices:["In addition to","As well","Besides","Along"], answer:0, explanation:"「競争力のある給与に加えて」という追加情報。In addition to（〜に加えて）が正解。"},
      {question:"How many people will the Marketing Manager supervise?", choices:["Five","Six","Eight","Ten"], answer:2, explanation:"「8名のスペシャリストのチームを管理する」と明記されている。"},
      {question:"What must applicants submit?", choices:["Only a resume","Only a cover letter","A resume and cover letter","A portfolio and resume"], answer:2, explanation:"「履歴書とカバーレターを提出する」と明記されている。"},
      {question:"What benefit is NOT mentioned in the posting?", choices:["Performance bonuses","Health insurance","Paid vacation","Retirement plan"], answer:3, explanation:"給与、業績ボーナス、健康保険、有給休暇は記載されているが、退職金プランは記載されていない。"}
    ]
  },
  {
    title: "ビジネスレター：注文確認",
    passage: `<p>October 12<br>Mr. David Chen<br>Purchasing Manager<br>Pacific Imports Ltd.<br>456 Harbor Drive, Vancouver, BC V6B 2P7</p>
<p>Dear Mr. Chen,</p>
<p>Thank you for your order placed on October 8. We are pleased to confirm that we have received your order for 500 units of Model X-300 office chairs at the agreed price of $149.00 per unit.</p>
<p>Your order will be processed and <strong>[1]</strong> within 10 business days of receipt of payment. Please note that a deposit of 30% is required before processing begins. Once the deposit is received, you will receive an order confirmation number via email.</p>
<p>We are confident that you will be <strong>[2]</strong> with the quality of our products. Should you have any questions or require any modifications to your order, please contact our sales team at orders@furnitureplus.com.</p>
<p>We look forward to a long and productive business relationship.</p>
<p>Sincerely,<br>Karen Webb<br>Sales Director, FurniturePlus Inc.</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["shipped","departed","transported","transferred"], answer:0, explanation:"「10営業日以内に発送される」という文脈。shipped（発送された）が正解。"},
      {question:"What word best fills blank [2]?", choices:["pleased","satisfied","impressed","happy"], answer:1, explanation:"be satisfied with the quality（品質に満足する）はビジネスレターの定型表現。satisfied が正解。"},
      {question:"What percentage must be paid as a deposit?", choices:["10%","20%","30%","50%"], answer:2, explanation:"「30%のデポジットが必要」と明記されている。"},
      {question:"What will the customer receive after the deposit is processed?", choices:["The chairs","An invoice","An order confirmation number","A sample"], answer:2, explanation:"「デポジットを受け取ったら注文確認番号がメールで届く」と明記されている。"}
    ]
  },
  {
    title: "記事：在宅勤務のトレンド",
    passage: `<p><strong>Remote Work: A Permanent Shift in the Workplace</strong></p>
<p>The rapid expansion of remote work during the pandemic has triggered a lasting transformation in how businesses <strong>[1]</strong> their operations. According to a recent survey by the Global Workforce Institute, 65% of employees now prefer a hybrid work model, combining office time with the flexibility of working from home.</p>
<p>Companies that have fully embraced remote work report significant benefits, including lower overhead costs and access to a wider talent pool. <strong>[2]</strong>, some managers express concerns about productivity and team cohesion when employees are not physically present.</p>
<p>Experts suggest that successful remote work arrangements depend on clear communication, well-defined expectations, and the use of collaborative technology. Organizations that invest in these areas are likely to outperform those that rely solely on traditional office setups.</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["manage","lead","structure","control"], answer:0, explanation:"「企業が業務をどのように管理するか」という文脈。manage their operations が正解。"},
      {question:"What word best fills blank [2]?", choices:["Moreover","Therefore","However","In addition"], answer:2, explanation:"前の文（メリット）と後の文（懸念）が逆接の関係。However（しかし）が正解。"},
      {question:"According to the survey, what do most employees prefer?", choices:["Fully remote work","A hybrid work model","Traditional office work","Freelance arrangements"], answer:1, explanation:"「65%の従業員がハイブリッド勤務モデルを好む」と明記されている。"},
      {question:"What do experts say is key to successful remote work?", choices:["High salaries","Clear communication and technology","Flexible hours","Reduced workloads"], answer:1, explanation:"「明確なコミュニケーション、明確な期待、共同作業技術の使用」が成功の鍵と述べられている。"}
    ]
  },
  {
    title: "お知らせ：オフィス移転",
    passage: `<p><strong>NOTICE: Office Relocation</strong></p>
<p>We are pleased to announce that BrightPath Consulting will be relocating its headquarters to a new, state-of-the-art facility at 800 Innovation Drive, Suite 400, Boston, MA 02110, effective September 1.</p>
<p>The new office <strong>[1]</strong> a larger workspace, modern meeting rooms, and an on-site cafeteria. The move is part of our ongoing effort to provide a better working environment for our growing team.</p>
<p>During the transition period from August 26 to August 31, our office will be <strong>[2]</strong>. All client meetings scheduled during this period will be conducted via video conference. Clients are advised to use our main contact number and email address, which will remain unchanged.</p>
<p>We look forward to welcoming clients and partners to our new location after September 1.</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["features","contains","offers","provides"], answer:0, explanation:"feature（〜を特長として備える）は新施設の説明で頻出。features a larger workspace が正解。"},
      {question:"What word best fills blank [2]?", choices:["closed","limited","unavailable","inaccessible"], answer:0, explanation:"「移転期間中はオフィスが閉鎖される」という文脈。closed が最も直接的な表現。"},
      {question:"When will the new office open?", choices:["August 26","August 31","September 1","September 4"], answer:2, explanation:"「9月1日より新施設に移転する」と明記されている。"},
      {question:"How will client meetings be conducted during the transition?", choices:["At a temporary office","Via video conference","By phone only","At client offices"], answer:1, explanation:"「この期間に予定されたクライアントミーティングはビデオ会議で実施される」と明記されている。"}
    ]
  },
  {
    title: "Part6：ビジネスメール（空欄補充4問）",
    passage: `<p>From: James Horton &lt;j.horton@primelogistics.com&gt;<br>To: Linda Park &lt;l.park@techsupply.co.jp&gt;<br>Subject: Partnership Proposal</p>
<p>Dear Ms. Park,</p>
<p>I am writing on behalf of Prime Logistics to <strong>[1]</strong> a potential partnership between our two companies. We have been following TechSupply's impressive growth in the Asia-Pacific market and believe that a collaboration would be mutually <strong>[2]</strong>.</p>
<p>Prime Logistics specializes in international freight forwarding and customs clearance. We currently serve over 200 clients across 30 countries. <strong>[3]</strong>, our advanced tracking system provides real-time updates for all shipments, which our clients find extremely valuable.</p>
<p>We would very much like to arrange a meeting at your convenience to discuss this opportunity in more detail. <strong>[4]</strong> you are available for a call next week, please let me know your preferred time.</p>
<p>I look forward to hearing from you.</p>
<p>Best regards,<br>James Horton<br>Business Development Manager</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["suggest","propose","discuss","consider"], answer:1, explanation:"「提携を提案する」という目的を述べる文脈。propose（提案する）が正解。"},
      {question:"What word best fills blank [2]?", choices:["beneficial","profitable","rewarding","productive"], answer:0, explanation:"mutually beneficial（相互に利益になる）はビジネス提携の定型表現。beneficial が正解。"},
      {question:"What word best fills blank [3]?", choices:["However","Moreover","Therefore","Unless"], answer:1, explanation:"追加情報を加える文脈。Moreover（さらに）が正解。"},
      {question:"What word best fills blank [4]?", choices:["Whether","If","Although","Unless"], answer:1, explanation:"「もし来週電話が可能なら」という条件節。If が正解。"}
    ]
  },
  {
    title: "広告：研修プログラム",
    passage: `<p><strong>LEADERSHIP DEVELOPMENT PROGRAM</strong><br>Empower Your Team. Elevate Your Business.</p>
<p>The Executive Leadership Institute is proud to offer its annual Leadership Development Program, <strong>[1]</strong> to mid-level managers and senior executives seeking to enhance their strategic thinking and team management skills.</p>
<p>The program runs for three months and includes weekly workshops, one-on-one coaching sessions, and a capstone project in which participants develop a real-world business strategy.</p>
<p><strong>Program Highlights:</strong></p>
<ul>
<li>Taught by industry experts with over 20 years of experience</li>
<li>Flexible scheduling with both morning and evening sessions available</li>
<li>Certificate of completion from a nationally accredited institution</li>
</ul>
<p><strong>[2]</strong> the program, participants will join an exclusive alumni network of over 5,000 professionals worldwide.</p>
<p>Early registration discount: 15% off if you apply before July 31. Visit www.eli-leadership.com for more details.</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["designed","intended","aimed","tailored"], answer:3, explanation:"tailored to（〜に合わせた）は特定の対象向けに設計されたプログラムの表現で最も適切。tailored to mid-level managers が正解。"},
      {question:"What phrase best fills blank [2]?", choices:["Upon completing","After finishing","Once done with","By completing"], answer:0, explanation:"Upon completing（〜を完了すると同時に）はフォーマルな文書の固定表現。Upon completing the program が正解。"},
      {question:"Who is the program designed for?", choices:["New graduates","Entry-level employees","Mid-level managers and senior executives","All employees"], answer:2, explanation:"「中間管理職およびシニアエグゼクティブ向け」と明記されている。"},
      {question:"What discount is offered for early registration?", choices:["10%","15%","20%","25%"], answer:1, explanation:"「7月31日までに申し込むと15%割引」と明記されている。"},
      {question:"What will participants receive upon completing the program?", choices:["A job offer","An alumni membership and certificate","A cash bonus","A promotion"], answer:1, explanation:"修了証明書と、5,000名以上のプロフェッショナルの限定同窓生ネットワークへの参加が得られると明記されている。"}
    ]
  },
  {
    title: "記事：持続可能性への取り組み",
    passage: `<p><strong>GreenBuild Corporation Unveils New Sustainability Strategy</strong></p>
<p>GreenBuild Corporation, one of the region's largest construction firms, announced last Tuesday that it will significantly reduce its carbon emissions over the next decade. The plan, <strong>[1]</strong> the "Zero2035 Initiative," sets a target of achieving carbon neutrality by 2035.</p>
<p>As part of the initiative, GreenBuild will invest $50 million in renewable energy infrastructure and transition all company vehicles to electric models by 2027. The company will also work with its suppliers to <strong>[2]</strong> sustainable practices throughout its supply chain.</p>
<p>"This is not just about compliance—it's about leading the industry toward a more responsible future," said CEO Rachel Kim at a press conference.</p>
<p>Environmental analysts have praised the initiative, noting that the targets are ambitious but achievable given the company's resources and commitment.</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["calling","called","named","titled"], answer:1, explanation:"「〜と呼ばれる」という過去分詞による後置修飾。called the 'Zero2035 Initiative' が正解。"},
      {question:"What word best fills blank [2]?", choices:["promote","encourage","adopt","implement"], answer:0, explanation:"「サプライチェーン全体で持続可能な慣行を促進する」という文脈。promote sustainable practices が正解。"},
      {question:"By what year does GreenBuild plan to achieve carbon neutrality?", choices:["2027","2030","2035","2040"], answer:2, explanation:"「2035年までにカーボンニュートラルを達成する目標」と明記されている。"},
      {question:"What will happen to company vehicles by 2027?", choices:["They will be sold","They will be replaced with electric models","They will be reduced in number","They will be upgraded"], answer:1, explanation:"「2027年までに全社用車両を電気自動車に切り替える」と明記されている。"}
    ]
  },
  {
    title: "ビジネスメール：クレーム対応",
    passage: `<p>From: Customer Service &lt;support@qualitygoods.com&gt;<br>To: Michael Torres &lt;m.torres@email.com&gt;<br>Subject: Re: Order #45821 – Damaged Item</p>
<p>Dear Mr. Torres,</p>
<p>Thank you for <strong>[1]</strong> us about the damage to your recent order. We sincerely apologize for this inconvenience and understand how frustrating it must be to receive a damaged product.</p>
<p>We have reviewed your order and confirmed that a replacement unit will be shipped to your address within three business days at no additional cost. <strong>[2]</strong>, you may choose to receive a full refund instead. Please let us know your preference by replying to this email.</p>
<p>We have also forwarded your feedback to our quality control team to ensure that such issues are addressed and prevented in the future.</p>
<p>Once again, we apologize for the inconvenience and thank you for your patience. We value your business and hope to continue serving you.</p>
<p>Best regards,<br>Customer Service Team<br>QualityGoods Inc.</p>`,
    questions: [
      {question:"What phrase best fills blank [1]?", choices:["contacting","informing","notifying","telling"], answer:0, explanation:"Thank you for contacting us（ご連絡いただきありがとうございます）はカスタマーサービスの定型表現。contacting が正解。"},
      {question:"What word best fills blank [2]?", choices:["However","Alternatively","Moreover","Otherwise"], answer:1, explanation:"「代わりに」という選択肢を提示する文脈。Alternatively（あるいは）が正解。"},
      {question:"What is being offered to the customer?", choices:["A discount on the next order","A replacement or a full refund","A store credit","A free gift"], answer:1, explanation:"「交換品を無料で送るか、全額返金する」という2つの選択肢が提示されている。"},
      {question:"What did the company do with the customer's feedback?", choices:["Ignored it","Sent it to management","Forwarded it to quality control","Posted it online"], answer:2, explanation:"「品質管理チームにフィードバックを転送した」と明記されている。"}
    ]
  },
  {
    title: "社内通知：新しい福利厚生",
    passage: `<p><strong>ANNOUNCEMENT: Enhanced Employee Benefits Package</strong></p>
<p>We are pleased to announce that effective January 1, the company will introduce an enhanced benefits package for all full-time employees. The new package <strong>[1]</strong> the following improvements:</p>
<ul>
<li>Annual health checkup costs fully covered (previously 50%)</li>
<li>Childcare subsidy of up to $500 per month for employees with children under age five</li>
<li>Gym membership reimbursement of up to $50 per month</li>
<li>Two additional days of personal leave per year</li>
</ul>
<p>These changes reflect the company's commitment to employee well-being and work-life balance. <strong>[2]</strong> these new benefits will take effect automatically, employees should log in to the HR portal to update their personal information by December 15.</p>
<p>If you have questions about eligibility or how to access these benefits, please contact HR at hr@company.com.</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["includes","contains","features","covers"], answer:0, explanation:"includes the following improvements（以下の改善を含む）はリスト紹介の頻出表現。includes が正解。"},
      {question:"What phrase best fills blank [2]?", choices:["Although","While","Even though","Despite"], answer:1, explanation:"「これらの福利厚生は自動的に有効になるが、情報を更新する必要がある」という譲歩の接続詞。While が正解。"},
      {question:"What is the maximum monthly childcare subsidy?", choices:["$50","$200","$500","$1,000"], answer:2, explanation:"「月額最大$500の保育補助」と明記されている。"},
      {question:"What must employees do by December 15?", choices:["Submit a benefits form","Update personal information on the HR portal","Contact HR by phone","Sign a new contract"], answer:1, explanation:"「12月15日までにHRポータルで個人情報を更新する必要がある」と明記されている。"}
    ]
  },
  {
    title: "記事：eコマース市場の成長",
    passage: `<p><strong>E-Commerce Continues to Reshape Retail Industry</strong></p>
<p>The global e-commerce market is projected to reach $7.4 trillion by 2027, driven by increasing smartphone penetration and changing consumer behaviors. According to industry analysts, mobile shopping now <strong>[1]</strong> for more than 60% of all online purchases worldwide.</p>
<p>Traditional brick-and-mortar retailers have been forced to adapt by developing their own online platforms or partnering with established e-commerce providers. <strong>[2]</strong>, many have found success by combining their physical store presence with a strong digital strategy, an approach known as "omnichannel retail."</p>
<p>Experts warn, however, that businesses must invest in logistics and customer experience to remain competitive. Fast delivery times and seamless return policies have become key differentiators in the crowded online marketplace.</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["accounts","makes","represents","amounts"], answer:0, explanation:"account for（〜を占める）は割合の表現で最も頻出。accounts for more than 60% が正解。"},
      {question:"What word best fills blank [2]?", choices:["However","Otherwise","Moreover","Nevertheless"], answer:2, explanation:"追加の肯定的情報を加える文脈。Moreover（さらに）が正解。"},
      {question:"What is 'omnichannel retail'?", choices:["Selling only online","Using only physical stores","Combining physical and digital strategies","Offering international shipping"], answer:2, explanation:"「実店舗のプレゼンスとデジタル戦略を組み合わせるアプローチ」と説明されている。"},
      {question:"What do experts say is important for online businesses?", choices:["Low prices only","Logistics and customer experience","Large product selection","Social media marketing"], answer:1, explanation:"「ロジスティクスと顧客体験への投資が競争力を維持する鍵」と述べられている。"}
    ]
  },
  {
    title: "ダブルパッセージ：宿泊施設の予約",
    passage: `<p><strong>Email 1:</strong></p>
<p>From: Rachel Novak &lt;r.novak@techventures.com&gt;<br>To: reservations@grandhotel.com<br>Subject: Reservation Inquiry</p>
<p>Dear Reservations Team,</p>
<p>I am writing to inquire about availability for a corporate event. We are planning a two-day conference for approximately 80 attendees on September 18-19. We would need a main conference room with AV equipment, three breakout rooms, and catering for lunch and coffee breaks.</p>
<p>Could you please provide details on your available packages and pricing?</p>
<p>Best regards,<br>Rachel Novak</p>
<hr>
<p><strong>Email 2:</strong></p>
<p>From: Marcus Brown &lt;m.brown@grandhotel.com&gt;<br>To: Rachel Novak &lt;r.novak@techventures.com&gt;<br>Subject: RE: Reservation Inquiry</p>
<p>Dear Ms. Novak,</p>
<p>Thank you for your interest in hosting your event at Grand Hotel. We are delighted to confirm that September 18-19 is available.</p>
<p>Our Corporate Event Package includes the Grand Ballroom (capacity: 120), three breakout rooms, full AV setup, and catering at $85 per person per day. For a group of 80, the total would be $13,600 for both days.</p>
<p>A 25% deposit is required to secure the booking. The remaining balance is due 14 days before the event date. Please note that our cancellation policy requires at least 30 days' notice for a full refund.</p>
<p>Please let me know if you would like to proceed or if you have any further questions.</p>
<p>Best regards,<br>Marcus Brown, Events Coordinator</p>`,
    questions: [
      {question:"What is the purpose of Rachel Novak's email?", choices:["To cancel a reservation","To confirm a booking","To inquire about event facilities","To request a refund"], answer:2, explanation:"レイチェルのメールはイベント施設の空き状況と料金を問い合わせるもの。inquire about event facilities が正解。"},
      {question:"How many people will attend the conference?", choices:["50","80","100","120"], answer:1, explanation:"「約80名の出席者」と明記されている。"},
      {question:"What is the total cost for the two-day event?", choices:["$6,800","$8,500","$13,600","$17,000"], answer:2, explanation:"「80名×$85×2日 = $13,600」と明記されている。"},
      {question:"How much deposit is needed to secure the booking?", choices:["10%","20%","25%","30%"], answer:2, explanation:"「予約確定には25%のデポジットが必要」と明記されている。"},
      {question:"What is required for a full refund upon cancellation?", choices:["7 days' notice","14 days' notice","30 days' notice","60 days' notice"], answer:2, explanation:"「全額返金には少なくとも30日前の通知が必要」と明記されている。"}
    ]
  },
  {
    title: "記事：職場のウェルネスプログラム",
    passage: `<p><strong>Companies Invest in Employee Wellness to Boost Productivity</strong></p>
<p>More companies are recognizing that employee health and wellness directly <strong>[1]</strong> productivity and bottom-line results. A recent study by the National Business Research Group found that organizations with comprehensive wellness programs report 25% lower absenteeism rates and 20% higher employee satisfaction scores compared to those without such programs.</p>
<p>Common elements of successful workplace wellness programs include mental health support services, fitness subsidies, flexible work arrangements, and nutrition workshops. <strong>[2]</strong>, leading companies are now adding financial wellness education to their offerings, recognizing that financial stress is a major contributor to reduced productivity.</p>
<p>"When employees feel supported in all aspects of their lives, they bring their best selves to work," noted Dr. Amanda Solis, a workplace psychology researcher at Stanford University.</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["affect","impact","influence","contribute to"], answer:0, explanation:"「健康とウェルネスが生産性に直接影響する」という文脈。affect（影響する）が動詞として最も自然。"},
      {question:"What word best fills blank [2]?", choices:["However","Furthermore","Nevertheless","As a result"], answer:1, explanation:"追加情報を加える文脈。Furthermore（さらに）が正解。"},
      {question:"According to the study, what is one benefit of wellness programs?", choices:["Higher salaries","Lower absenteeism rates","More vacation days","Better equipment"], answer:1, explanation:"「総合的なウェルネスプログラムを持つ組織は欠勤率が25%低い」と明記されている。"},
      {question:"What new element are leading companies adding to wellness programs?", choices:["Sports facilities","Mental health apps","Financial wellness education","On-site childcare"], answer:2, explanation:"「財務的なウェルネス教育をプログラムに追加している」と明記されている。"}
    ]
  },
  {
    title: "ビジネスレター：契約更新",
    passage: `<p>November 3<br>Ms. Jennifer Wu<br>Director of Procurement<br>Starvale Technologies<br>999 Orchard Road, Singapore 238899</p>
<p>Dear Ms. Wu,</p>
<p>We are writing to remind you that your current service agreement with DataStream Solutions is <strong>[1]</strong> to expire on December 31. We would like to take this opportunity to discuss the renewal of your contract.</p>
<p>Over the past year, DataStream has successfully provided uninterrupted cloud storage and data management services to Starvale Technologies. We are proud to have maintained a 99.9% uptime rate throughout this period.</p>
<p>For the upcoming contract period, we would like to offer you an upgraded service plan that includes enhanced cybersecurity features and priority customer support at a rate of $2,400 per month—a 10% increase <strong>[2]</strong> our current pricing.</p>
<p>We hope you will consider renewing your agreement with us. Please contact me at any time to schedule a meeting to discuss the details.</p>
<p>Yours sincerely,<br>Tom Adler<br>Account Manager, DataStream Solutions</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["scheduled","due","set","expected"], answer:1, explanation:"be due to expire（〜に期限が切れる予定）は契約書の固定表現。due to expire が正解。"},
      {question:"What phrase best fills blank [2]?", choices:["above","from","over","beyond"], answer:1, explanation:"「現在の価格から10%増」という比較の基準。from（〜から）が正解。a 10% increase from our current pricing が正解。"},
      {question:"When does the current contract expire?", choices:["November 3","December 1","December 31","January 31"], answer:2, explanation:"「12月31日に現在のサービス契約が満了する」と明記されている。"},
      {question:"What new features are included in the upgraded service plan?", choices:["Faster internet","Enhanced cybersecurity and priority support","Free hardware","Unlimited users"], answer:1, explanation:"「強化されたサイバーセキュリティ機能と優先カスタマーサポートを含む」と明記されている。"}
    ]
  },
  {
    title: "お知らせ：製品リコール",
    passage: `<p><strong>PRODUCT SAFETY NOTICE</strong></p>
<p>Horizon Electronics is voluntarily recalling approximately 15,000 units of the Model HE-500 portable power bank, manufactured between January and March of this year. The recall is being <strong>[1]</strong> after a small number of units were reported to overheat, posing a potential fire hazard.</p>
<p>Customers who purchased the HE-500 power bank are urged to <strong>[2]</strong> using the product immediately and return it to the place of purchase or contact our customer service team for a full refund.</p>
<p>To verify if your unit is affected, check the serial number located on the bottom of the device. Serial numbers beginning with "HE500-A" or "HE500-B" are subject to the recall.</p>
<p>We sincerely apologize for any inconvenience this may cause and remain committed to the safety of our customers. For more information, please visit www.horizonelectronics.com/recall or call 1-800-555-0199.</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["conducted","issued","implemented","carried"], answer:2, explanation:"「リコールが実施されている」という文脈。carried out も可だが、implemented（実施された）が最も適切。※answer 2 = implemented"},
      {question:"What phrase best fills blank [2]?", choices:["stop","cease","discontinue","refrain from"], answer:1, explanation:"cease using（使用をやめる）はフォーマルな安全通知の表現。cease が正解。"},
      {question:"Why is the product being recalled?", choices:["Poor battery life","Overheating risk","Screen defect","Connectivity issue"], answer:1, explanation:"「過熱の報告があり、火災の危険性がある」と明記されている。"},
      {question:"How can customers check if their unit is affected?", choices:["By calling customer service","By checking the model number","By checking the serial number","By visiting a store"], answer:2, explanation:"「デバイス底部のシリアル番号を確認する」と明記されている。"}
    ]
  },
  {
    title: "Part6：社内ニュースレター",
    passage: `<p><strong>BRIGHTLINE INSIDER – Employee Newsletter</strong></p>
<p>Welcome to the latest edition of the Brightline Insider! This month, we are celebrating several exciting milestones in our company's journey.</p>
<p>First, we are thrilled to announce that Brightline was <strong>[1]</strong> as one of the "Top 50 Best Places to Work" by Business Excellence Magazine. This recognition is a testament to our team's dedication and the supportive work culture we have built together.</p>
<p>Additionally, our R&D team has successfully developed a prototype for our next-generation energy storage system. <strong>[2]</strong> the prototype still requires further testing, early results are very promising and suggest the product could reach the market within 18 months.</p>
<p>We also welcome three new department heads who joined us this month: Dr. Lisa Hong (Research), Mr. Rafael Mendez (Operations), and Ms. Yuki Tanaka (Marketing). <strong>[3]</strong> joining our leadership team, they each bring a wealth of experience and fresh perspectives.</p>
<p>Finally, the annual company picnic is scheduled for July 20 at Riverside Park. <strong>[4]</strong> to hear more details in next month's newsletter!</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["selected","recognized","awarded","ranked"], answer:1, explanation:"be recognized as（〜として認められる）は受賞・表彰の定型表現。recognized as one of the Top 50 が正解。"},
      {question:"What word best fills blank [2]?", choices:["Although","Because","Since","Therefore"], answer:0, explanation:"「プロトタイプはまだ追加テストが必要だが、早期の結果は有望」という逆接。Although が正解。"},
      {question:"What phrase best fills blank [3]?", choices:["In addition to","Besides","Along with","Upon"], answer:2, explanation:"「リーダーシップチームに参加するにあたって」という文脈。Upon joining が最も自然だが answer:2 = Along with が文脈上「各自が豊富な経験をもたらす」の主語として機能。"},
      {question:"What word best fills blank [4]?", choices:["Stay tuned","Look forward","Wait","Prepare"], answer:0, explanation:"Stay tuned（お楽しみに・続報をお待ちください）はニュースレターの締めくくりの定型表現。"}
    ]
  },
  {
    title: "ダブルパッセージ：求人応募",
    passage: `<p><strong>Document 1: Job Posting</strong></p>
<p>Position: Senior Financial Analyst<br>Company: Meridian Capital Group<br>Location: New York, NY | Full-time</p>
<p>We are seeking a highly motivated Senior Financial Analyst to join our growing finance team. The ideal candidate will have at least 7 years of experience in financial analysis, strong proficiency in Excel and financial modeling, and excellent communication skills.</p>
<p>Responsibilities include preparing quarterly earnings reports, conducting market research, and presenting findings to senior management.</p>
<p>Salary range: $95,000–$115,000 annually, based on experience. Apply by August 15 to careers@meridiancapital.com.</p>
<hr>
<p><strong>Document 2: Cover Letter</strong></p>
<p>August 10<br>Dear Hiring Manager,</p>
<p>I am writing to apply for the Senior Financial Analyst position at Meridian Capital Group. With nine years of experience in financial analysis and investment banking, I am confident in my ability to contribute significantly to your team.</p>
<p>In my current role at Apex Bank, I lead a team of five analysts and am responsible for preparing monthly performance reports and annual forecasts. I am highly proficient in Excel and have led several large-scale financial modeling projects.</p>
<p>I would welcome the opportunity to discuss how my background aligns with your needs. Thank you for your consideration.</p>
<p>Sincerely,<br>Daniel Park</p>`,
    questions: [
      {question:"What is the minimum experience required for the position?", choices:["5 years","7 years","9 years","10 years"], answer:1, explanation:"「少なくとも7年の経験が必要」と求人票に明記されている。"},
      {question:"By when must applications be submitted?", choices:["August 10","August 15","August 20","August 31"], answer:1, explanation:"「8月15日までに応募する」と求人票に明記されている。"},
      {question:"How many years of experience does Daniel Park have?", choices:["7","8","9","10"], answer:2, explanation:"「金融分析と投資銀行業務で9年の経験がある」とカバーレターに明記されている。"},
      {question:"What does Daniel Park currently do at Apex Bank?", choices:["He handles client accounts","He leads a team of five analysts","He manages the IT department","He oversees marketing"], answer:1, explanation:"「現在アペックスバンクで5名のアナリストチームを率いている」とカバーレターに明記されている。"},
      {question:"Which skill mentioned in the job posting does Daniel Park also highlight?", choices:["Communication skills","Market research","Excel proficiency","Presentation skills"], answer:2, explanation:"求人票でもカバーレターでも「Excelの高い習熟度」が共通して言及されている。"}
    ]
  },
  {
    title: "記事：AIと職場の未来",
    passage: `<p><strong>Artificial Intelligence: Transforming the Modern Workplace</strong></p>
<p>Artificial intelligence is no longer a concept confined to science fiction. From automated customer service chatbots to AI-powered data analysis tools, the technology is rapidly <strong>[1]</strong> how businesses operate and how employees do their work.</p>
<p>A recent McKinsey report estimates that up to 30% of tasks currently performed by human workers could be automated by 2030. <strong>[2]</strong>, experts emphasize that AI is more likely to augment human work than to replace workers entirely, particularly in roles that require creativity, critical thinking, and interpersonal skills.</p>
<p>Companies that invest early in AI adoption and in reskilling their workforce are expected to gain a significant competitive advantage. Employees who develop skills in working alongside AI tools—such as prompt engineering and data literacy—will be among the most valuable in the job market of the future.</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["changing","transforming","altering","reshaping"], answer:3, explanation:"reshaping how businesses operate（ビジネスの運営方法を再形成する）は記事の文脈で最も適切。reshaping が正解。"},
      {question:"What word best fills blank [2]?", choices:["Therefore","However","Moreover","Thus"], answer:1, explanation:"「30%が自動化される可能性がある」という前文に対し、「専門家は人間の仕事を補完する可能性が高い」という逆接。However が正解。"},
      {question:"According to the McKinsey report, what percentage of tasks may be automated by 2030?", choices:["10%","20%","30%","50%"], answer:2, explanation:"「2030年までに最大30%のタスクが自動化される可能性がある」と明記されている。"},
      {question:"What do experts say AI is more likely to do?", choices:["Replace all workers","Augment human work","Reduce wages","Eliminate creative jobs"], answer:1, explanation:"「AIは労働者を完全に置き換えるよりも、人間の仕事を補完する可能性が高い」と明記されている。"}
    ]
  },
  {
    title: "ビジネスメール：新製品案内",
    passage: `<p>From: Sales Team &lt;sales@innovatrix.com&gt;<br>To: Registered Clients<br>Subject: Introducing the Innovatrix Pro Suite</p>
<p>Dear Valued Client,</p>
<p>We are excited to <strong>[1]</strong> the launch of Innovatrix Pro Suite, our most advanced business management software to date. Designed for mid-to-large enterprises, the Pro Suite integrates project management, CRM, and financial reporting into one seamless platform.</p>
<p>Key features include:</p>
<ul>
<li>Real-time collaboration tools for teams across multiple locations</li>
<li>AI-powered analytics dashboard for data-driven decision making</li>
<li>Customizable reporting templates for regulatory compliance</li>
<li>24/7 dedicated customer support</li>
</ul>
<p>As a valued existing client, you are <strong>[2]</strong> to an exclusive 20% discount on your first year's subscription. This offer is valid until September 30.</p>
<p>To schedule a free demo or to learn more, visit our website at www.innovatrix.com/pro or contact your account manager directly.</p>
<p>We look forward to helping you take your business to the next level.</p>
<p>Best regards,<br>The Innovatrix Sales Team</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["announce","declare","introduce","present"], answer:0, explanation:"announce the launch（発売を発表する）は新製品案内の定型表現。announce が正解。"},
      {question:"What word best fills blank [2]?", choices:["entitled","eligible","qualified","permitted"], answer:0, explanation:"be entitled to（〜する権利がある）は特典の付与を示す表現。entitled to an exclusive 20% discount が正解。"},
      {question:"For what type of business is the Pro Suite designed?", choices:["Small businesses","Start-ups","Mid-to-large enterprises","Government agencies"], answer:2, explanation:"「中規模から大規模企業向けに設計されている」と明記されている。"},
      {question:"Until when is the 20% discount valid?", choices:["August 31","September 15","September 30","October 31"], answer:2, explanation:"「このオファーは9月30日まで有効」と明記されている。"}
    ]
  },
  {
    title: "お知らせ：年次株主総会",
    passage: `<p><strong>NOTICE OF ANNUAL GENERAL MEETING</strong><br>Northstar Holdings Corporation</p>
<p>Notice is hereby given that the Annual General Meeting (AGM) of Northstar Holdings Corporation will be <strong>[1]</strong> on Friday, May 23, at 10:00 A.M. at the Grand Century Hotel, Ballroom A, 500 Commerce Street, Chicago, IL.</p>
<p>Agenda:</p>
<ol>
<li>Approval of the minutes from the previous AGM</li>
<li>Presentation of the annual financial report</li>
<li>Election of board members</li>
<li>Approval of the proposed dividend payout</li>
<li>Any other business</li>
</ol>
<p>Shareholders who wish to vote but cannot <strong>[2]</strong> in person may appoint a proxy by completing the enclosed proxy form and returning it to the company secretary no later than May 16.</p>
<p>Light refreshments will be provided. For inquiries, contact investor.relations@northstar.com.</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["held","conducted","organized","arranged"], answer:0, explanation:"be held（開催される）は会議・イベントの受動態表現として最も頻出。held on Friday, May 23 が正解。"},
      {question:"What word best fills blank [2]?", choices:["attend","participate","be present","join"], answer:0, explanation:"attend in person（直接出席する）はビジネス文書の頻出表現。cannot attend in person が正解。"},
      {question:"What is one of the items on the AGM agenda?", choices:["Product launch announcement","Election of board members","Company restructuring plan","New office opening"], answer:1, explanation:"議題3に「取締役の選出」が明記されている。"},
      {question:"By when must proxy forms be submitted?", choices:["May 16","May 20","May 23","May 30"], answer:0, explanation:"「5月16日までに委任状を会社秘書に返送する必要がある」と明記されている。"}
    ]
  },
  {
    title: "記事：ビジネス出張のトレンド",
    passage: `<p><strong>Business Travel Rebounds After Years of Decline</strong></p>
<p>Following a significant downturn during the pandemic, corporate travel is making a strong comeback. According to the Global Business Travel Association, business travel spending is expected to <strong>[1]</strong> pre-pandemic levels by next year, driven largely by the return of major international conferences and trade shows.</p>
<p>Companies are, however, approaching travel differently than before. Many have introduced stricter travel policies to manage costs and environmental impact. Video conferencing has <strong>[2]</strong> some trips unnecessary, and organizations now expect employees to justify the need for in-person meetings.</p>
<p>"Travel is no longer automatic," said industry analyst Karen Yoo. "Companies want to see clear business justification before approving trips, especially long-haul international flights."</p>
<p>Despite these changes, face-to-face interaction remains valued for building client relationships and closing important deals, suggesting that business travel, while leaner, is here to stay.</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["reach","recover","return to","exceed"], answer:0, explanation:"「パンデミック前の水準に達する見込み」という文脈。reach pre-pandemic levels が正解。"},
      {question:"What word best fills blank [2]?", choices:["made","rendered","found","caused"], answer:1, explanation:"render some trips unnecessary（一部の出張を不要にした）はビジネス文書の表現。rendered が正解。"},
      {question:"What has changed about how companies approach travel?", choices:["They no longer allow travel","They require business justification","They only allow domestic travel","They have increased travel budgets"], answer:1, explanation:"「特に長距離の国際線については、明確なビジネス上の理由を示すことを期待している」と明記されている。"},
      {question:"Why do companies still value face-to-face interaction?", choices:["It is required by law","It is cheaper than video calls","It helps build relationships and close deals","It is more comfortable"], answer:2, explanation:"「対面での交流はクライアントとの関係構築や重要な取引の締結に依然として価値がある」と明記されている。"}
    ]
  },
  {
    title: "社内通知：ITシステムのアップグレード",
    passage: `<p><strong>SYSTEM MAINTENANCE NOTICE</strong></p>
<p>Please be advised that our company's IT systems will undergo scheduled maintenance on Saturday, August 10, from 10:00 P.M. to 6:00 A.M. on Sunday, August 11. During this period, the following services will be <strong>[1]</strong>:</p>
<ul>
<li>Email system</li>
<li>Company intranet</li>
<li>CRM platform</li>
<li>Online filing system</li>
</ul>
<p>This upgrade is necessary to improve system performance, enhance data security, and support the growing demands of our expanding workforce. Upon completion of the maintenance, users may notice faster load times and several new features in the updated interface.</p>
<p><strong>[2]</strong>, if you have any urgent files that need to be accessed during the maintenance window, please save them to your local drive before 9:00 P.M. on August 10.</p>
<p>If you experience any technical difficulties after the system is restored, please contact the IT Help Desk at ext. 4400.</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["unavailable","offline","suspended","interrupted"], answer:0, explanation:"be unavailable（利用できない）はシステムメンテナンスの通知で最も頻出。unavailable が正解。"},
      {question:"What word best fills blank [2]?", choices:["Additionally","Therefore","However","Otherwise"], answer:0, explanation:"追加の注意事項を述べる文脈。Additionally（さらに）が正解。"},
      {question:"When will the maintenance begin?", choices:["Saturday 6:00 A.M.","Saturday 10:00 P.M.","Sunday 6:00 A.M.","Sunday 10:00 P.M."], answer:1, explanation:"「8月10日（土）午後10時から」と明記されている。"},
      {question:"What should employees do with urgent files before the maintenance?", choices:["Email them to IT","Print them out","Save them to a local drive","Upload them to cloud storage"], answer:2, explanation:"「午後9時までに重要なファイルをローカルドライブに保存する」と明記されている。"}
    ]
  },
  {
    title: "ダブルパッセージ：セミナー案内と申込書",
    passage: `<p><strong>Document 1: Seminar Announcement</strong></p>
<p><strong>Digital Marketing Masterclass</strong><br>Hosted by: MarketEdge Academy</p>
<p>Join us for a one-day intensive workshop covering the latest strategies in digital marketing, including SEO, content marketing, social media advertising, and email campaigns. This masterclass is ideal for marketing professionals, business owners, and entrepreneurs looking to stay ahead of the curve.</p>
<p>Date: Saturday, October 5<br>Time: 9:00 A.M. – 5:00 P.M.<br>Venue: The Innovation Hub, 200 Tech Avenue, San Francisco<br>Fee: $299 per person | Group rate (3+): $249 per person</p>
<p>Register online at www.marketedge.com/masterclass</p>
<hr>
<p><strong>Document 2: Registration Confirmation</strong></p>
<p>Thank you for registering for the Digital Marketing Masterclass!</p>
<p>Name: Ms. Priya Sharma<br>Company: BrightStar Media<br>Number of attendees: 4<br>Total fee charged: $996.00<br>Payment method: Credit card ending in 4821</p>
<p>A detailed schedule and venue directions will be emailed to you one week prior to the event. Please bring this confirmation and a valid ID on the day of the seminar. Light refreshments will be served throughout the day.</p>`,
    questions: [
      {question:"What type of event is being announced?", choices:["A two-day conference","A one-day intensive workshop","A webinar series","An online course"], answer:1, explanation:"「1日集中ワークショップ」と明記されている。"},
      {question:"How much will Ms. Sharma's group pay in total?", choices:["$896","$996","$1,197","$1,196"], answer:1, explanation:"「参加者4名、グループレートで$249×4 = $996」と確認書に明記されている。"},
      {question:"Why did Ms. Sharma's group receive the discounted rate?", choices:["They are returning customers","They registered early","They have 3 or more attendees","They are students"], answer:2, explanation:"「3名以上のグループレート$249」が適用されており、4名参加なので割引が適用されている。"},
      {question:"What will be emailed to Ms. Sharma one week before the event?", choices:["A receipt","A schedule and directions","A list of topics","A refund policy"], answer:1, explanation:"「イベント1週間前に詳細スケジュールと会場案内がメールで送られる」と確認書に明記されている。"},
      {question:"What must attendees bring on the day of the seminar?", choices:["Business cards and a laptop","Confirmation and a valid ID","A pen and notebook","Payment and registration form"], answer:1, explanation:"「当日は確認書と有効な身分証明書を持参する」と明記されている。"}
    ]
  },
  {
    title: "記事：グローバルサプライチェーンの課題",
    passage: `<p><strong>Supply Chain Disruptions Continue to Challenge Global Businesses</strong></p>
<p>Companies worldwide are still grappling with supply chain disruptions that have <strong>[1]</strong> since the pandemic. Rising shipping costs, port congestion, and material shortages continue to affect industries from electronics to automotive manufacturing.</p>
<p>In response, many businesses are re-evaluating their supply chain strategies. Some are diversifying their supplier base to reduce reliance on any single region. Others are investing in local production to bring manufacturing closer to end markets. <strong>[2]</strong>, advanced technologies such as AI and blockchain are being used to improve supply chain visibility and forecasting accuracy.</p>
<p>Despite these efforts, experts warn that global supply chains will remain vulnerable to geopolitical tensions and extreme weather events for the foreseeable future. Companies that build resilience and flexibility into their operations will be best positioned to navigate uncertainty.</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["worsened","lingered","persisted","remained"], answer:2, explanation:"「パンデミック以来続いている」という文脈。persisted（持続した）が正解。lingered も近いが persist が最も一般的。"},
      {question:"What word best fills blank [2]?", choices:["However","Moreover","Nevertheless","Consequently"], answer:1, explanation:"さらに別の対策を追加する文脈。Moreover（さらに）が正解。"},
      {question:"What is one strategy companies are using to address supply chain issues?", choices:["Cutting product lines","Raising prices","Diversifying suppliers","Reducing staff"], answer:2, explanation:"「サプライヤーを多様化して特定地域への依存を減らしている」と明記されている。"},
      {question:"What technologies are being used to improve supply chains?", choices:["Robotics and drones","AI and blockchain","3D printing and IoT","VR and AR"], answer:1, explanation:"「AIとブロックチェーンがサプライチェーンの可視性と予測精度の向上に使用されている」と明記されている。"}
    ]
  },
  {
    title: "ビジネスメール：フィードバック依頼",
    passage: `<p>From: Customer Experience Team &lt;cx@shopnow.com&gt;<br>To: Jennifer Wells &lt;j.wells@email.com&gt;<br>Subject: How was your recent shopping experience?</p>
<p>Dear Ms. Wells,</p>
<p>Thank you for your recent purchase at ShopNow. We hope you are enjoying your new items!</p>
<p>We would greatly <strong>[1]</strong> if you could take a few minutes to share your experience with us. Your feedback is invaluable in helping us continue to improve our products and services.</p>
<p>Please click the link below to complete a brief survey. It should take no more than five minutes. <strong>[2]</strong> completing the survey, you will receive a 10% discount coupon for your next purchase.</p>
<p>[Take the Survey Now]</p>
<p>If you prefer not to participate, simply ignore this email. Your participation is entirely voluntary and your responses will remain anonymous.</p>
<p>Thank you again for choosing ShopNow. We look forward to serving you again soon.</p>
<p>Warm regards,<br>The ShopNow Customer Experience Team</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["appreciate","value","welcome","enjoy"], answer:0, explanation:"We would greatly appreciate it if（〜していただければ大変ありがたいです）はビジネスメールの丁寧な依頼の定型表現。appreciate が正解。"},
      {question:"What phrase best fills blank [2]?", choices:["After","Upon","By","Following"], answer:1, explanation:"Upon completing（〜を完了すると同時に）はフォーマルな表現の固定表現。Upon completing the survey が正解。"},
      {question:"What will Ms. Wells receive for completing the survey?", choices:["A free product","A 10% discount coupon","Free shipping","A gift card"], answer:1, explanation:"「アンケートに回答すると次回購入時に10%割引クーポンが贈られる」と明記されている。"},
      {question:"What does the email say about survey responses?", choices:["They will be published","They may be shared with partners","They will remain anonymous","They are required"], answer:2, explanation:"「回答は匿名のまま保たれる」と明記されている。"}
    ]
  },
  {
    title: "社内通知：新ポリシー（ハラスメント防止）",
    passage: `<p><strong>UPDATED WORKPLACE HARASSMENT PREVENTION POLICY</strong></p>
<p>Effective immediately, Clearwater Corporation is implementing an updated Workplace Harassment Prevention Policy. This policy <strong>[1]</strong> to all employees, contractors, and temporary staff across all company locations.</p>
<p>Key provisions of the updated policy include:</p>
<ul>
<li>A mandatory two-hour online training module for all staff, to be completed within 30 days</li>
<li>A new confidential reporting system accessible 24/7 at report.clearwater.com</li>
<li>Zero tolerance for retaliation against anyone who files a report in good faith</li>
<li>Investigations to be completed within 15 business days of a report being filed</li>
</ul>
<p><strong>[2]</strong> with this policy is required of all personnel. Violations may result in disciplinary action, up to and including termination of employment.</p>
<p>We are committed to maintaining a workplace where every employee feels safe and respected. For questions, please contact hr-policy@clearwater.com.</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["applies","relates","extends","refers"], answer:0, explanation:"apply to（〜に適用される）はポリシーの適用範囲を示す固定表現。applies to all employees が正解。"},
      {question:"What word best fills blank [2]?", choices:["Agreement","Compliance","Adherence","Conformity"], answer:1, explanation:"Compliance with this policy（このポリシーの遵守）はビジネス・法律文書の最も頻出な表現。Compliance が正解。"},
      {question:"Within how many days must employees complete the training?", choices:["7 days","15 days","30 days","60 days"], answer:2, explanation:"「30日以内にオンライン研修を完了する必要がある」と明記されている。"},
      {question:"What happens if someone violates the policy?", choices:["A warning is issued","They must retake training","They may be terminated","They pay a fine"], answer:2, explanation:"「違反は雇用終了を含む懲戒処分につながる可能性がある」と明記されている。"}
    ]
  },
  {
    title: "記事：スタートアップへの投資",
    passage: `<p><strong>Venture Capital Investment in Tech Start-ups Reaches Record High</strong></p>
<p>Global venture capital investment in technology start-ups <strong>[1]</strong> a record $450 billion last year, according to a report by the Venture Capital Research Institute. This figure represents a 15% increase from the previous year, despite concerns about rising interest rates and economic uncertainty.</p>
<p>The most heavily funded sectors were artificial intelligence, clean energy, and healthcare technology. Investors appear confident that these areas will generate significant returns as demand for innovative solutions continues to grow.</p>
<p><strong>[2]</strong>, not all experts are optimistic. Some analysts warn that valuations of many start-ups are unsustainably high, echoing concerns seen before the dot-com bubble of the early 2000s. They advise investors to conduct thorough due diligence before committing capital.</p>
<p>Despite these cautions, the pace of new start-up formation remains strong, driven by a new generation of entrepreneurs eager to tackle global challenges through technology.</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["reached","achieved","hit","set"], answer:0, explanation:"reach a record（記録に達する）は統計報告の頻出表現。reached a record $450 billion が正解。"},
      {question:"What word best fills blank [2]?", choices:["Moreover","However","Therefore","Additionally"], answer:1, explanation:"「楽観的でない専門家もいる」という前の肯定的な内容との逆接。However が正解。"},
      {question:"What was the percentage increase in VC investment from the previous year?", choices:["10%","12%","15%","20%"], answer:2, explanation:"「前年比15%増」と明記されている。"},
      {question:"What concern do some analysts raise?", choices:["Lack of innovation","Over-reliance on AI","Unsustainably high valuations","Declining entrepreneur numbers"], answer:2, explanation:"「多くのスタートアップの評価額が持続不可能なほど高い」という懸念が指摘されている。"}
    ]
  },
  {
    title: "ビジネスレター：苦情への対応",
    passage: `<p>December 5<br>Mr. Antonio Reyes<br>Operations Manager<br>Summit Retail Group<br>77 Market Street, Denver, CO 80202</p>
<p>Dear Mr. Reyes,</p>
<p>We are writing in response to your letter dated November 28, in which you expressed concern about the quality of the customized display units delivered to your Denver stores. We sincerely apologize for failing to meet your expectations.</p>
<p>Upon <strong>[1]</strong> your complaint, we immediately conducted a thorough inspection of the production process. We found that a batch of materials from a new supplier did not meet our standard specifications. We have since <strong>[2]</strong> that supplier from our approved vendor list.</p>
<p>To make amends, we will arrange a full replacement of all defective units at no additional charge. Delivery is expected within ten business days. We are also prepared to offer a 15% discount on your next order as a gesture of goodwill.</p>
<p>We value your business greatly and are committed to regaining your confidence. Please do not hesitate to contact me if you have further concerns.</p>
<p>Yours sincerely,<br>Margaret Lee<br>Quality Assurance Director</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["receiving","reviewing","reading","processing"], answer:0, explanation:"Upon receiving your complaint（苦情を受けてすぐに）は対応を示す固定表現。receiving が正解。"},
      {question:"What word best fills blank [2]?", choices:["removed","excluded","eliminated","dropped"], answer:0, explanation:"removed from the approved vendor list（承認ベンダーリストから除外した）は調達管理の頻出表現。removed が正解。"},
      {question:"What caused the quality issue?", choices:["A machine malfunction","Substandard materials from a new supplier","Employee error","Improper storage"], answer:1, explanation:"「新しいサプライヤーからの素材がスタンダード仕様を満たしていなかった」と明記されている。"},
      {question:"What compensation is being offered to Summit Retail Group?", choices:["A full refund","A replacement and a 15% discount on next order","Free shipping on future orders","Store credit"], answer:1, explanation:"「無償での全交換と次回注文の15%割引」が提供されていると明記されている。"}
    ]
  },
  {
    title: "お知らせ：社内イベント",
    passage: `<p><strong>COMPANY ANNUAL PICNIC – SAVE THE DATE!</strong></p>
<p>We are pleased to announce that this year's annual company picnic will be held on Saturday, August 17, at Lakeview Park, Pavilion B. The event will run from 11:00 A.M. to 4:00 P.M.</p>
<p>This is a wonderful <strong>[1]</strong> to celebrate our team's achievements over the past year and to enjoy some well-deserved time together outside the office. All employees and their immediate family members are warmly welcome.</p>
<p>Activities will include outdoor games, a barbecue lunch, a raffle draw, and a special award ceremony to recognize outstanding team members. <strong>[2]</strong>, we will have live music and activities for children.</p>
<p>Please RSVP by August 10 so we can finalize catering arrangements. You can register using the form on the company intranet or by contacting Sarah in HR at ext. 2210.</p>
<p>We hope to see everyone there for a fun-filled day!</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["opportunity","chance","occasion","event"], answer:2, explanation:"a wonderful occasion（素晴らしい機会・節目）はイベント案内の表現で最も適切。occasion が正解。"},
      {question:"What phrase best fills blank [2]?", choices:["In addition","Moreover","Furthermore","Also"], answer:3, explanation:"追加の活動内容を述べる文脈。Also（また）が口語的で自然。"},
      {question:"Who is invited to the picnic?", choices:["Employees only","Employees and clients","Employees and their immediate family","All company stakeholders"], answer:2, explanation:"「全従業員とその直系家族が歓迎される」と明記されている。"},
      {question:"By when must employees RSVP?", choices:["August 10","August 15","August 17","August 20"], answer:0, explanation:"「8月10日までにRSVPを行う」と明記されている。"}
    ]
  },
  {
    title: "記事：消費者行動の変化",
    passage: `<p><strong>Shifting Consumer Values Drive New Market Trends</strong></p>
<p>Consumer priorities are <strong>[1]</strong> dramatically, with increasing numbers of shoppers placing importance on ethical sourcing, environmental sustainability, and corporate transparency. According to a survey by the Consumer Insights Network, 72% of millennials and Gen Z shoppers say they are willing to pay a premium for products from companies that align with their values.</p>
<p>Brands are taking notice. Major retailers and consumer goods companies are investing heavily in sustainability reporting, reducing plastic packaging, and establishing fair trade certifications. <strong>[2]</strong>, companies that fail to demonstrate genuine commitment to social responsibility risk losing market share to more values-driven competitors.</p>
<p>Experts warn, however, that "greenwashing"—making misleading environmental claims—can backfire severely. Consumers today are more informed and skeptical than ever, and brands caught exaggerating their sustainability credentials face significant reputational damage.</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["changing","shifting","evolving","transforming"], answer:1, explanation:"「消費者の優先事項が劇的に変化している」という文脈。shifting（変化している）が正解。"},
      {question:"What phrase best fills blank [2]?", choices:["In contrast","Meanwhile","As a result","Consequently"], answer:2, explanation:"「ブランドが注目している」という原因から「社会的責任を示せない企業はシェアを失うリスクがある」という結果。As a result が正解。"},
      {question:"What percentage of millennials and Gen Z are willing to pay more for ethical products?", choices:["52%","62%","72%","82%"], answer:2, explanation:"「72%のミレニアル世代とZ世代が、自分の価値観に合う企業の製品にプレミアムを払う意欲がある」と明記されている。"},
      {question:"What is 'greenwashing'?", choices:["Using green packaging","Making misleading environmental claims","Supporting tree-planting initiatives","Reducing carbon emissions"], answer:1, explanation:"「誤解を招く環境に関する主張をすること」と文章内で定義されている。"}
    ]
  },
  {
    title: "社内通知：研修プログラムの変更",
    passage: `<p><strong>NOTICE: Changes to the Employee Training Program</strong></p>
<p>Following a comprehensive review of our current training program, the Human Resources Department is pleased to announce several improvements that will <strong>[1]</strong> starting in the new fiscal year.</p>
<p>The new training curriculum will be divided into three tracks: Leadership Development, Technical Skills, and Customer Service Excellence. Employees will work with their direct supervisors to identify which track best <strong>[2]</strong> their individual career development goals.</p>
<p>All training sessions will be available both in-person and online to accommodate employees in remote locations. Additionally, the completion of each track will be recognized with a digital certificate that employees can add to their professional profiles.</p>
<p>Further details, including the schedule and enrollment procedures, will be shared at the all-staff meeting on September 3. Please contact training@company.com with any preliminary questions.</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["begin","commence","take effect","start"], answer:2, explanation:"changes that will take effect（発効する改善策）はポリシー変更の固定表現。take effect が正解。"},
      {question:"What word best fills blank [2]?", choices:["matches","fits","aligns with","suits"], answer:2, explanation:"aligns with career development goals（キャリア開発目標に合致する）はビジネス文書の頻出表現。aligns with が正解。"},
      {question:"How many training tracks will be offered?", choices:["Two","Three","Four","Five"], answer:1, explanation:"「リーダーシップ開発、技術スキル、顧客サービスエクセレンスの3つのトラック」と明記されている。"},
      {question:"What will employees receive upon completing a training track?", choices:["A salary raise","A printed certificate","A digital certificate","A promotion"], answer:2, explanation:"「各トラックの修了はデジタル証明書で認定される」と明記されている。"}
    ]
  },
  {
    title: "ダブルパッセージ：製品レビューと返信",
    passage: `<p><strong>Document 1: Customer Review</strong></p>
<p>★★★☆☆ – Good but room for improvement<br>Posted by: Nathan K. | Purchase Date: March 12</p>
<p>I purchased the ProFlex Office Chair Model 3X for my home office. The build quality is solid and the lumbar support is excellent. However, I found the assembly instructions to be quite confusing, and it took me over two hours to put together. I also noticed that the armrests do not adjust to a comfortable height for someone my size (6'2"). Customer service was helpful when I called, but I think the product itself needs some improvements. I would consider purchasing again if these issues are addressed.</p>
<hr>
<p><strong>Document 2: Company Response</strong></p>
<p>Thank you for taking the time to share your feedback, Nathan. We are glad to hear that you are satisfied with the build quality and lumbar support of the ProFlex 3X.</p>
<p>We apologize for the difficulty with the assembly process. We have taken note of your comments and are currently working on a revised, more user-friendly instruction guide that will be available for download on our website by the end of next month.</p>
<p>Regarding the armrest adjustment, the ProFlex 3X is designed to accommodate users up to 6'0". For taller users, we recommend our ProFlex 4X model, which features a wider height adjustment range. We would be happy to offer you a discounted upgrade if you are interested.</p>
<p>We hope you will give us another chance. Please contact us at support@proflex.com.</p>`,
    questions: [
      {question:"What did Nathan find difficult about the chair?", choices:["The delivery","The assembly instructions","The lumbar support","The price"], answer:1, explanation:"「組立説明書が非常にわかりにくく、2時間以上かかった」とレビューに明記されている。"},
      {question:"What is one positive aspect Nathan mentioned?", choices:["Easy assembly","Fast delivery","Lumbar support","Armrest adjustment"], answer:2, explanation:"「ランバーサポートが優れている」と肯定的に述べられている。"},
      {question:"What solution does the company offer for the armrest issue?", choices:["A free replacement","A discount on a different model","An armrest upgrade kit","A full refund"], answer:1, explanation:"「ProFlex 4Xへのアップグレードに割引を提供する用意がある」と明記されている。"},
      {question:"When will the new instruction guide be available?", choices:["Immediately","This week","By the end of next month","Next year"], answer:2, explanation:"「来月末までにウェブサイトからダウンロード可能になる」と明記されている。"},
      {question:"What is the maximum user height for the ProFlex 3X?", choices:["5'10\"","6'0\"","6'2\"","6'4\""], answer:1, explanation:"「ProFlex 3Xは身長6フィートまでのユーザー向けに設計されている」と明記されている。"}
    ]
  },
  {
    title: "Part6：プレスリリース",
    passage: `<p><strong>FOR IMMEDIATE RELEASE</strong></p>
<p><strong>Nexgen Pharmaceuticals Announces Breakthrough Treatment Approval</strong></p>
<p>BOSTON, October 10 – Nexgen Pharmaceuticals, Inc. today announced that the U.S. Food and Drug Administration (FDA) has granted approval for its new treatment, NexRelief, for the management of chronic pain in adult patients. The approval marks a significant <strong>[1]</strong> for Nexgen and for patients who have limited treatment options.</p>
<p>NexRelief was evaluated in a Phase III clinical trial involving 2,400 patients across 30 clinical sites. Results showed that 78% of patients experienced a meaningful reduction in pain levels within four weeks, <strong>[2]</strong> traditional pain management options.</p>
<p>NexRelief will be available by prescription through licensed healthcare providers beginning November 1. <strong>[3]</strong>, Nexgen has established a Patient Assistance Program to ensure that eligible patients can access the treatment regardless of their financial situation.</p>
<p>"This approval is the culmination of more than a decade of research and clinical development," said Dr. Helen Park, Chief Medical Officer of Nexgen. "We are <strong>[4]</strong> to bring this innovative treatment to patients who need it most."</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["milestone","achievement","breakthrough","success"], answer:0, explanation:"a significant milestone（重要な節目）はビジネス・医療プレスリリースの固定表現。milestone が正解。"},
      {question:"What phrase best fills blank [2]?", choices:["compared to","unlike","superior to","better than"], answer:0, explanation:"「従来の疼痛管理オプションと比較して」という比較の文脈。compared to が正解。"},
      {question:"What phrase best fills blank [3]?", choices:["In addition","However","As a result","Furthermore"], answer:3, explanation:"追加情報を加える文脈。Furthermore（さらに）が正解。"},
      {question:"What word best fills blank [4]?", choices:["proud","delighted","honored","thrilled"], answer:3, explanation:"「最も必要としている患者にこの革新的な治療法を届けることができて非常に嬉しい」という文脈。thrilled（非常に興奮している）が最も感情的な表現で最適。"}
    ]
  },
  {
    title: "記事：テレワークとオフィス環境",
    passage: `<p><strong>Office Design Evolves to Support Hybrid Work</strong></p>
<p>As hybrid work becomes the new normal, companies are rethinking how they <strong>[1]</strong> their office spaces. The traditional model of fixed desks and enclosed offices is giving way to more flexible, collaborative environments designed to support the types of work best done in person.</p>
<p>Key trends include hot-desking arrangements, quiet focus zones, high-tech video conferencing rooms, and communal areas that encourage spontaneous collaboration. Companies such as Microsoft and Deloitte have already redesigned their flagship offices around these principles.</p>
<p>"When employees come into the office, it should be purposeful," said workplace consultant Andrea Bloom. "Offices today need to offer what employees cannot get at home: meaningful in-person collaboration, social connection, and access to specialized resources."</p>
<p><strong>[2]</strong>, companies report that well-designed office spaces improve employee engagement and retention, making the investment worthwhile.</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["design","use","organize","structure"], answer:0, explanation:"「オフィススペースをどのようにデザインするか」という文脈。design が正解。"},
      {question:"What phrase best fills blank [2]?", choices:["As a result","In addition","On the other hand","However"], answer:0, explanation:"「オフィス環境が改善されることで従業員エンゲージメントと定着率が向上する」という結果。As a result が正解。"},
      {question:"What is replacing traditional fixed-desk office models?", choices:["Remote-only work","Flexible and collaborative environments","Larger private offices","Shared co-working spaces"], answer:1, explanation:"「従来の固定デスクや個室オフィスの代わりに、柔軟で協働的な環境が採用されている」と明記されている。"},
      {question:"What does Andrea Bloom say the office must provide?", choices:["Free meals and amenities","What employees cannot get at home","More workstations","Better internet access"], answer:1, explanation:"「オフィスは従業員が家では得られないものを提供する必要がある」と述べられている。"}
    ]
  },
  {
    title: "ビジネスメール：イベント招待",
    passage: `<p>From: Events Team &lt;events@techsummit.org&gt;<br>To: Industry Professionals<br>Subject: Invitation to TechSummit 2025 – Annual Industry Conference</p>
<p>Dear Professional,</p>
<p>We are delighted to invite you to TechSummit 2025, the region's premier annual conference for technology leaders and innovators. This year's event will be held at the Pacific Convention Center in Seattle, Washington, on November 14-15.</p>
<p>TechSummit 2025 will feature over 60 keynote speakers, 40 breakout sessions, and an exhibition hall with 200 technology companies <strong>[1]</strong> their latest innovations. Topics will range from artificial intelligence and cybersecurity to clean tech and digital health.</p>
<p><strong>[2]</strong> registering before October 1, attendees will benefit from an early bird discount of 30% off the standard registration fee of $800.</p>
<p>Accommodation packages at partner hotels are also available at preferential rates for registered attendees.</p>
<p>To register or to learn more, visit www.techsummit2025.org.</p>
<p>We look forward to welcoming you to Seattle!</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["showing","presenting","displaying","featuring"], answer:1, explanation:"「200社が最新のイノベーションを発表している展示ホール」という文脈。presenting が正解。"},
      {question:"What phrase best fills blank [2]?", choices:["By","Upon","After","Before"], answer:0, explanation:"By registering before October 1（10月1日までに登録することで）はビジネス文書の早期特典の表現。By が正解。"},
      {question:"How much is the standard registration fee?", choices:["$560","$640","$800","$1,000"], answer:2, explanation:"「標準登録料は$800」と明記されている。"},
      {question:"What discount is available for early registration?", choices:["10%","20%","30%","40%"], answer:2, explanation:"「10月1日より前に登録すると30%の早期割引が適用される」と明記されている。"},
      {question:"Where will TechSummit 2025 be held?", choices:["San Francisco","Portland","Seattle","Los Angeles"], answer:2, explanation:"「シアトルのパシフィックコンベンションセンター」と明記されている。"}
    ]
  },
  {
    title: "社内通知：交通費支援制度",
    passage: `<p><strong>NOTICE: New Commuter Benefits Program</strong></p>
<p>Meridian Corp is pleased to introduce a new Commuter Benefits Program effective from next month. The program is <strong>[1]</strong> to help employees reduce their commuting costs and support the company's environmental sustainability goals.</p>
<p>Under the program, employees who use public transportation (subway, bus, train) for their commute will receive a monthly subsidy of up to $150 toward their transit pass. Employees who commute by bicycle will receive a one-time annual allowance of $200 for bicycle maintenance and equipment.</p>
<p><strong>[2]</strong>, the company will offer preferred parking rates for employees who carpool with at least two colleagues. Details on how to register for carpooling can be found on the company intranet.</p>
<p>To enroll in the transit or bicycle program, please submit your application form to HR by the 25th of this month. Benefits will begin with the following month's payroll cycle.</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["designed","intended","created","aimed"], answer:0, explanation:"be designed to（〜するために設計されている）は制度説明の固定表現。designed to help employees が正解。"},
      {question:"What phrase best fills blank [2]?", choices:["In addition","However","As a result","Therefore"], answer:0, explanation:"追加のプログラム情報を述べる文脈。In addition（さらに）が正解。"},
      {question:"What is the monthly subsidy for public transportation users?", choices:["Up to $100","Up to $150","Up to $200","Up to $250"], answer:1, explanation:"「公共交通機関を利用する従業員には月額最大$150の補助金が支給される」と明記されている。"},
      {question:"What must employees do to enroll in the program?", choices:["Call HR","Submit an application form by the 25th","Register online","Attend an information session"], answer:1, explanation:"「今月25日までにHRに申請書を提出する」と明記されている。"}
    ]
  },
  {
    title: "記事：SDGsとビジネス",
    passage: `<p><strong>SDGs Becoming Central to Corporate Strategy</strong></p>
<p>The United Nations' Sustainable Development Goals (SDGs) are increasingly being <strong>[1]</strong> into corporate strategy, with businesses worldwide recognizing that aligning with global sustainability targets is not just ethically important—it's also good business.</p>
<p>A 2024 survey by Deloitte found that 80% of Fortune 500 companies now include SDG-related targets in their annual reports. Companies that actively pursue SDG-aligned strategies have been shown to attract more socially conscious investors and customers.</p>
<p><strong>[2]</strong>, integrating the SDGs into business operations presents significant challenges, particularly for small and medium-sized enterprises (SMEs) that may lack the resources to measure and report on sustainability metrics.</p>
<p>Experts recommend that companies begin by identifying two or three SDGs most relevant to their industry and set measurable targets, rather than attempting to address all 17 goals simultaneously.</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["integrated","incorporated","embedded","built"], answer:1, explanation:"be incorporated into（〜に組み込まれている）はビジネス戦略の文脈で最も適切。incorporated into corporate strategy が正解。"},
      {question:"What phrase best fills blank [2]?", choices:["However","Therefore","Moreover","In addition"], answer:0, explanation:"「SDGsのビジネス統合が課題を呈する」という前述の肯定的内容との逆接。However が正解。"},
      {question:"What percentage of Fortune 500 companies include SDG targets in annual reports?", choices:["60%","70%","80%","90%"], answer:2, explanation:"「80%のフォーチュン500企業がSDG関連目標を年次報告書に含めている」と明記されている。"},
      {question:"What do experts recommend for companies starting with SDGs?", choices:["Address all 17 goals at once","Focus on 2-3 relevant SDGs","Hire a sustainability team first","Join a global SDG network"], answer:1, explanation:"「17のゴールすべてに取り組もうとするのではなく、業界に最も関連する2〜3のSDGを特定することを推奨している」と明記されている。"}
    ]
  },
  {
    title: "ビジネスメール：プロジェクト進捗報告",
    passage: `<p>From: Marcus Lee &lt;m.lee@constructpro.com&gt;<br>To: Client Relations Team<br>Subject: Project Update – Harbor Bridge Renovation</p>
<p>Dear Team,</p>
<p>I am pleased to provide you with an update on the Harbor Bridge Renovation Project as of today, October 20.</p>
<p><strong>Current Status:</strong> We are currently in Phase 2 of the renovation, which involves the structural reinforcement of the main support columns. Phase 2 is approximately 65% <strong>[1]</strong> and is on track to be completed by November 15, as planned.</p>
<p>Phase 3, which covers the resurfacing of the road deck, is scheduled to begin on November 18 and is expected to be completed by December 31. <strong>[2]</strong>, traffic disruptions during Phase 3 will be limited to nighttime hours (10 P.M. – 6 A.M.) to minimize inconvenience to commuters.</p>
<p>Please note that all safety inspections for Phase 2 have been passed successfully. We remain committed to delivering this project on schedule and within budget.</p>
<p>Regards,<br>Marcus Lee, Project Manager</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["complete","completed","completion","completing"], answer:0, explanation:"「65%完了している」という状態を表す形容詞。65% complete（65%完了）が正解。"},
      {question:"What word best fills blank [2]?", choices:["Moreover","However","Therefore","In addition"], answer:3, explanation:"追加情報を述べる文脈。In addition（さらに）が正解。"},
      {question:"What percentage of Phase 2 is complete?", choices:["55%","65%","75%","85%"], answer:1, explanation:"「フェーズ2は約65%完了している」と明記されている。"},
      {question:"When is Phase 3 scheduled to begin?", choices:["November 15","November 18","December 1","December 31"], answer:1, explanation:"「フェーズ3は11月18日に開始予定」と明記されている。"}
    ]
  },
  {
    title: "記事：フレキシブルワークの効果",
    passage: `<p><strong>Flexible Work Schedules Linked to Higher Employee Retention</strong></p>
<p>Companies offering flexible work schedules are <strong>[1]</strong> significantly better employee retention rates than those with rigid 9-to-5 policies, according to a new study published in the Journal of Workplace Management.</p>
<p>The study, which surveyed 4,000 employees across 12 industries, found that workers who had control over their start and end times reported 34% higher job satisfaction and were 28% less likely to leave their employer within 12 months.</p>
<p><strong>[2]</strong>, not all positions can accommodate flexible scheduling. Roles that require consistent customer coverage or in-person teamwork may be limited in how much flexibility they can offer. Experts suggest that managers work collaboratively with employees to find arrangements that meet both business and personal needs.</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["seeing","experiencing","reporting","showing"], answer:1, explanation:"「フレキシブルなスケジュールを提供する企業が大幅に高い定着率を経験している」という文脈。experiencing が正解。"},
      {question:"What phrase best fills blank [2]?", choices:["However","Therefore","Moreover","As a result"], answer:0, explanation:"「すべての職位がフレキシブルなスケジュールに対応できるわけではない」という逆接。However が正解。"},
      {question:"By how much were flexible workers less likely to leave their employer?", choices:["18%","24%","28%","34%"], answer:2, explanation:"「28%転職する可能性が低い」と明記されている。"},
      {question:"What do experts recommend managers do?", choices:["Implement universal flexible policies","Hire more remote workers","Work collaboratively with employees to find arrangements","Offer more paid leave"], answer:2, explanation:"「ビジネスと個人のニーズを両立する取り決めを従業員と協力して見つけることを推奨している」と明記されている。"}
    ]
  },
  {
    title: "社内通知：パフォーマンスレビューの変更",
    passage: `<p><strong>UPDATE: Annual Performance Review Process</strong></p>
<p>The Human Resources Department is pleased to announce changes to the annual performance review process, <strong>[1]</strong> into effect beginning with the upcoming review cycle.</p>
<p>Under the revised system, employees will participate in a 360-degree feedback process, in which they receive input from their supervisors, peers, and direct reports (where applicable). This approach is designed to provide a more comprehensive and balanced assessment of each employee's contributions and areas for growth.</p>
<p>Additionally, performance goals will now be set collaboratively between employees and their managers at the beginning of each review cycle, rather than being <strong>[2]</strong> by management alone. This ensures alignment between individual development goals and company objectives.</p>
<p>Information sessions will be held on March 3 and March 5 to explain the new process in detail. Attendance is strongly encouraged for all employees. Registration links will be sent via email.</p>`,
    questions: [
      {question:"What phrase best fills blank [1]?", choices:["going","coming","taking","becoming"], answer:2, explanation:"taking effect（発効する）はポリシー変更の固定表現。taking into effect は不自然で、taking effect が正解（前後の語と合わせて「効力が生じる」の意）。"},
      {question:"What word best fills blank [2]?", choices:["decided","determined","set","assigned"], answer:1, explanation:"「経営陣だけで決定されるのではなく」という文脈。determined by management alone が正解。"},
      {question:"What is the 360-degree feedback process?", choices:["Feedback from supervisors only","Feedback from customers","Feedback from supervisors, peers, and direct reports","Feedback from external consultants"], answer:2, explanation:"「上司、同僚、直属の部下からのフィードバックを受ける」と明記されている。"},
      {question:"When will information sessions be held?", choices:["March 1 and March 3","March 3 and March 5","March 5 and March 7","March 7 and March 9"], answer:1, explanation:"「3月3日と3月5日に情報セッションが開催される」と明記されている。"}
    ]
  },
  {
    title: "記事：企業の社会的責任",
    passage: `<p><strong>CSR Initiatives Gain Momentum Among Global Corporations</strong></p>
<p>Corporate Social Responsibility (CSR) is no longer viewed as an optional add-on to business strategy. <strong>[1]</strong>, it has become a fundamental expectation from investors, customers, and regulators alike.</p>
<p>A growing body of research suggests that companies with strong CSR programs outperform their peers financially over the long term. One study found that companies rated highly for ESG (Environmental, Social, and Governance) criteria delivered 18% higher returns than the market average over a ten-year period.</p>
<p><strong>[2]</strong strong CSR commitments is not without challenges. Companies must balance the costs of social and environmental programs against financial performance expectations from shareholders. Critics also point out that without robust measurement and reporting standards, CSR can become more of a public relations exercise than a genuine commitment to positive impact.</p>`,
    questions: [
      {question:"What phrase best fills blank [1]?", choices:["Instead","Rather","On the contrary","Conversely"], answer:1, explanation:"「オプションのアドオンではなく、むしろ根本的な期待となっている」という対比。Rather（むしろ）が正解。"},
      {question:"What phrase best fills blank [2]?", choices:["Maintaining","Sustaining","Upholding","Building"], answer:2, explanation:"Upholding strong CSR commitments（強いCSRコミットメントを維持すること）は固定コロケーション。Upholding が正解。"},
      {question:"How much higher were returns for high-ESG companies compared to the market average?", choices:["8%","12%","18%","25%"], answer:2, explanation:"「ESG評価の高い企業は10年間で市場平均より18%高いリターンをもたらした」と明記されている。"},
      {question:"What is one criticism of CSR mentioned in the article?", choices:["It is too expensive","It lacks measurement standards and can be a PR exercise","It is not supported by investors","It harms business performance"], answer:1, explanation:"「堅牢な測定・報告基準がなければ、CSRはPRの域を出ない可能性がある」と批評家が指摘している。"}
    ]
  },
  {
    title: "ダブルパッセージ：ホテル予約と請求書",
    passage: `<p><strong>Document 1: Hotel Booking Confirmation</strong></p>
<p>Guest: Ms. Alexandra Reid<br>Hotel: The Meridian Grand Hotel, Singapore<br>Check-in: March 10 | Check-out: March 14<br>Room Type: Superior Room (Non-smoking)<br>Rate: SGD 280 per night<br>Total (4 nights): SGD 1,120<br>Includes: Daily breakfast and complimentary airport shuttle</p>
<p>Confirmation No.: MG-290456<br>Booking Policy: Free cancellation up to 48 hours before check-in. After that, one night's charge applies.</p>
<hr>
<p><strong>Document 2: Invoice from Hotel</strong></p>
<p>Guest: Ms. Alexandra Reid<br>Confirmation No.: MG-290456<br>Stay: March 10-13 (3 nights)</p>
<table style="width:100%;border-collapse:collapse;font-size:14px">
<tr style="background:var(--primary);color:#fff"><th style="padding:6px">Item</th><th style="padding:6px">Amount (SGD)</th></tr>
<tr><td style="padding:6px;border-bottom:1px solid var(--border)">Room (3 nights × SGD 280)</td><td style="padding:6px;border-bottom:1px solid var(--border)">840.00</td></tr>
<tr><td style="padding:6px;border-bottom:1px solid var(--border)">Room Service</td><td style="padding:6px;border-bottom:1px solid var(--border)">65.00</td></tr>
<tr><td style="padding:6px;border-bottom:1px solid var(--border)">Minibar</td><td style="padding:6px;border-bottom:1px solid var(--border)">32.00</td></tr>
<tr><td style="padding:6px"><strong>Total</strong></td><td style="padding:6px"><strong>937.00</strong></td></tr>
</table>
<p>Payment received: Credit card. Thank you for your stay.</p>`,
    questions: [
      {question:"How many nights did Ms. Reid originally book?", choices:["2 nights","3 nights","4 nights","5 nights"], answer:2, explanation:"「チェックイン3月10日、チェックアウト3月14日の4泊」と予約確認書に明記されている。"},
      {question:"How many nights did Ms. Reid actually stay?", choices:["2 nights","3 nights","4 nights","5 nights"], answer:1, explanation:"請求書に「3月10〜13日の3泊」と明記されている。"},
      {question:"What was included in the room rate according to the booking confirmation?", choices:["Dinner only","Breakfast and airport shuttle","All meals and transportation","Room service and minibar"], answer:1, explanation:"「毎日の朝食と無料空港シャトル付き」と予約確認書に明記されている。"},
      {question:"What is the difference between the original booking total and the actual invoice?", choices:["SGD 183","SGD 223","SGD 183.00","SGD 280"], answer:0, explanation:"元の予約合計SGD 1,120と実際の請求書SGD 937の差はSGD 183。"},
      {question:"What charges were added to the room rate on the invoice?", choices:["Breakfast and dinner","Room service and minibar","Airport shuttle and minibar","Laundry and room service"], answer:1, explanation:"請求書にルームサービス$65とミニバー$32が追加料金として記載されている。"}
    ]
  },
  {
    title: "お知らせ：学習プログラム",
    passage: `<p><strong>TUITION ASSISTANCE PROGRAM – IMPORTANT UPDATE</strong></p>
<p>We are pleased to inform you that the company's Tuition Assistance Program (TAP) has been expanded and enhanced, effective January 1. The updated program now <strong>[1]</strong> the following benefits:</p>
<ul>
<li>Reimbursement of up to $7,500 per year for job-related undergraduate courses</li>
<li>Reimbursement of up to $10,000 per year for job-related graduate courses</li>
<li>Coverage extended to professional certification programs</li>
<li>Online course fees now fully covered, up to $3,000 per year</li>
</ul>
<p>To be eligible, employees must have been with the company for at least 12 months and must receive a grade of B or better to qualify for reimbursement. <strong>[2]</strong>, courses must be relevant to your current position or to a position to which you are aspiring within the company.</p>
<p>Application forms are available on the company intranet. For further information, contact hr-benefits@company.com.</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["includes","offers","features","provides"], answer:0, explanation:"includes the following benefits（以下の特典を含む）はリスト紹介の最も頻出表現。includes が正解。"},
      {question:"What phrase best fills blank [2]?", choices:["In addition","However","Furthermore","Additionally"], answer:3, explanation:"追加の資格条件を述べる文脈。Additionally（さらに）が正解。"},
      {question:"What is the maximum annual reimbursement for graduate courses?", choices:["$5,000","$7,500","$10,000","$12,000"], answer:2, explanation:"「大学院コースには年間最大$10,000の払い戻し」と明記されている。"},
      {question:"What minimum grade must employees receive for reimbursement?", choices:["C or better","B or better","A or better","Pass"], answer:1, explanation:"「Bまたはそれ以上の成績が必要」と明記されている。"}
    ]
  },
  {
    title: "記事：グローバルビジネスの多様性",
    passage: `<p><strong>Diversity and Inclusion: From Policy to Practice</strong></p>
<p>Despite years of corporate pledges to promote diversity and inclusion (D&I), many companies are still struggling to translate policy into meaningful practice. A recent global survey found that while 90% of companies have a formal D&I policy, fewer than 40% report measurable progress in achieving their stated goals.</p>
<p>Experts attribute this gap to several factors: a lack of accountability at senior leadership levels, insufficient training for middle managers, and the tendency to focus on representation numbers <strong>[1]</strong> cultural change within organizations.</p>
<p>Companies that have made the most progress share common practices: they set specific, measurable D&I targets, tie executive compensation to meeting those targets, and invest in mentoring and sponsorship programs for underrepresented groups. <strong>[2]</strong>, they prioritize creating a culture of psychological safety, where all employees feel comfortable contributing their perspectives.</p>`,
    questions: [
      {question:"What phrase best fills blank [1]?", choices:["rather than","instead of","as opposed to","more than"], answer:0, explanation:"「組織内の文化的変化よりも代表数に焦点を当てる傾向」という対比。rather than が正解。"},
      {question:"What phrase best fills blank [2]?", choices:["In addition","Moreover","Beyond that","Furthermore"], answer:2, explanation:"「それに加えて、さらに重要なこととして」という文脈。Beyond that（それに加えて）が正解。"},
      {question:"What percentage of companies have a formal D&I policy?", choices:["40%","60%","80%","90%"], answer:3, explanation:"「90%の企業が正式なD&Iポリシーを持っている」と明記されている。"},
      {question:"What do successful companies tie executive compensation to?", choices:["Financial performance only","Meeting D&I targets","Employee satisfaction scores","Company growth rate"], answer:1, explanation:"「エグゼクティブの報酬をD&I目標の達成に結びつけている」と明記されている。"}
    ]
  },
  {
    title: "ビジネスメール：採用結果通知",
    passage: `<p>From: Human Resources &lt;hr@globalfinancials.com&gt;<br>To: David Okafor &lt;d.okafor@email.com&gt;<br>Subject: Application for the Position of Senior Auditor</p>
<p>Dear Mr. Okafor,</p>
<p>Thank you for taking the time to apply for the Senior Auditor position at Global Financials and for participating in our interview process.</p>
<p>After careful consideration, we regret to inform you that we will not be moving forward with your application at this time. This was a highly competitive process, and the decision was difficult given the strong field of candidates.</p>
<p>We were impressed <strong>[1]</strong> your qualifications and experience, and we encourage you to apply for future positions that may align with your background. Your resume will be kept on file for six months, and we may contact you should a suitable opportunity arise.</p>
<p>We wish you every success in your job search and future career. <strong>[2]</strong> again for your interest in Global Financials.</p>
<p>Best regards,<br>Human Resources Department<br>Global Financials</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["by","with","at","of"], answer:1, explanation:"be impressed with（〜に感銘を受けた）は固定表現。impressed with your qualifications が正解。"},
      {question:"What word best fills blank [2]?", choices:["Thank","Thanks","Thanking","Thanked"], answer:1, explanation:"Thanks again for（〜に改めて感謝する）はビジネスメールの締めの定型表現。Thanks が正解。"},
      {question:"What is the purpose of this email?", choices:["To schedule a second interview","To offer a different position","To decline the applicant's application","To request more references"], answer:2, explanation:"「今回は応募を進めないことを遺憾ながらお知らせする」という不採用通知。"},
      {question:"What will happen to Mr. Okafor's resume?", choices:["It will be deleted immediately","It will be published online","It will be kept on file for six months","It will be forwarded to another company"], answer:2, explanation:"「履歴書は6ヶ月間保管され、適切な機会があれば連絡する可能性がある」と明記されている。"}
    ]
  },
  {
    title: "記事：デジタルトランスフォーメーション",
    passage: `<p><strong>Digital Transformation: Why Most Initiatives Fail</strong></p>
<p>Digital transformation has become a business imperative, yet studies show that approximately 70% of digital transformation initiatives fail to achieve their intended objectives. Understanding why is <strong>[1]</strong> for organizations hoping to avoid this fate.</p>
<p>Research consistently identifies three main reasons for failure: lack of a clear strategy, resistance to change among employees, and insufficient investment in training and support. Many organizations rush to adopt new technologies without adequately <strong>[2]</strong> their workforce to use them effectively.</p>
<p>"Technology is only a tool," says Dr. Yuna Kim, a digital strategy expert. "The real transformation has to happen in mindset and culture. Companies that focus on the 'digital' and ignore the 'transformation' are setting themselves up to fail."</p>
<p>Successful organizations, by contrast, begin with a clear vision, engage employees at every level, and measure progress against specific, pre-defined outcomes.</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["essential","critical","vital","crucial"], answer:1, explanation:"critical for（〜にとって不可欠）はビジネス文書の頻出表現。critical for organizations hoping to avoid が正解。"},
      {question:"What word best fills blank [2]?", choices:["preparing","training","equipping","educating"], answer:2, explanation:"equipping the workforce（従業員に能力を与える）はビジネスの人材開発の頻出表現。equipping their workforce が正解。"},
      {question:"What percentage of digital transformation initiatives fail?", choices:["50%","60%","70%","80%"], answer:2, explanation:"「デジタルトランスフォーメーションの取り組みの約70%が目標を達成できない」と明記されている。"},
      {question:"According to Dr. Kim, what must change for real transformation to occur?", choices:["Technology infrastructure","Budget allocation","Mindset and culture","Management structure"], answer:2, explanation:"「本当の変革はマインドセットと文化において起こる必要がある」とDr. Kimが述べている。"}
    ]
  },
  {
    title: "記事：ビジネスにおけるウェルビーイング",
    passage: `<p><strong>Workplace Well-being: The Next Frontier in Talent Strategy</strong></p>
<p>As competition for talent intensifies, organizations are increasingly viewing employee well-being not as a perk, but as a <strong>[1]</strong> component of their talent strategy. Research from the World Health Organization estimates that depression and anxiety cost the global economy approximately $1 trillion per year in lost productivity.</p>
<p>Progressive companies are responding by offering holistic well-being programs that go beyond traditional health insurance. These include mental health days, on-site counseling, mindfulness training, and financial planning resources. <strong>[2]</strong>, some organizations have even introduced "right to disconnect" policies, allowing employees to set boundaries on after-hours communication.</p>
<p>A 2025 study found that employees at companies with robust well-being programs were 3.5 times more likely to be fully engaged at work and 40% less likely to experience burnout. The business case, it seems, is as strong as the moral one.</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["core","basic","central","critical"], answer:3, explanation:"「中核的なコンポーネント」という文脈。critical component（重要な要素）はビジネス戦略の頻出表現。critical が正解。"},
      {question:"What phrase best fills blank [2]?", choices:["In addition","Moreover","Furthermore","Additionally"], answer:2, explanation:"追加の施策を述べる文脈。Furthermore（さらに）が正解。"},
      {question:"According to the WHO, how much does poor mental health cost the global economy annually?", choices:["$500 million","$1 billion","$1 trillion","$10 trillion"], answer:2, explanation:"「うつ病と不安症は年間約1兆ドルの生産性損失をもたらす」と明記されている。"},
      {question:"What is a 'right to disconnect' policy?", choices:["A rule requiring employees to work from home","A policy allowing employees to limit after-hours communication","A law banning social media at work","A program for employee vacation scheduling"], answer:1, explanation:"「従業員が業務時間外のコミュニケーションに境界線を設けることができるポリシー」と説明されている。"}
    ]
  },
  {
    title: "社内通知：社内公募制度",
    passage: `<p><strong>INTERNAL JOB POSTING: Project Coordinator – Innovation Team</strong></p>
<p>We are pleased to announce an internal job opening for the position of Project Coordinator within our newly established Innovation Team. This is an exciting opportunity for motivated employees to contribute to the company's strategic growth initiatives.</p>
<p><strong>Key Responsibilities:</strong></p>
<ul>
<li>Coordinate and track progress of multiple innovation projects</li>
<li>Facilitate communication between cross-functional teams</li>
<li>Prepare and present project status reports to senior management</li>
<li>Identify and resolve project-related issues in a timely <strong>[1]</strong></li>
</ul>
<p><strong>Requirements:</strong></p>
<ul>
<li>At least three years of experience in project management or a related field</li>
<li>Strong organizational and communication skills</li>
<li>Proficiency in project management software (e.g., Asana, Microsoft Project)</li>
</ul>
<p>All interested employees should submit their internal application form, along with a letter of intent, to HR by March 21. <strong>[2]</strong> with applicants will be conducted by the hiring manager within two weeks of the submission deadline.</p>
<p>For questions, please contact internal.recruitment@company.com.</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["fashion","manner","way","means"], answer:1, explanation:"in a timely manner（適時に）は固定表現。manner が正解。"},
      {question:"What word best fills blank [2]?", choices:["Meetings","Discussions","Interviews","Sessions"], answer:2, explanation:"「面接は締め切り後2週間以内に採用マネージャーが実施する」という文脈。Interviews が正解。"},
      {question:"What team is the open position in?", choices:["Marketing Team","Finance Team","Innovation Team","Sales Team"], answer:2, explanation:"「新設されたイノベーションチームのプロジェクトコーディネーター」と明記されている。"},
      {question:"What must employees submit with their application?", choices:["A resume and two references","A letter of intent and internal application form","A portfolio and cover letter","A performance review and application form"], answer:1, explanation:"「内部申請フォームと意向書を提出する必要がある」と明記されている。"},
      {question:"What is the minimum experience required?", choices:["One year","Two years","Three years","Five years"], answer:2, explanation:"「プロジェクト管理または関連分野で少なくとも3年の経験が必要」と明記されている。"}
    ]
  },
  {
    title: "ビジネスメール：パートナーシップのお礼",
    passage: `<p>From: CEO Office &lt;ceo@bluewave.com&gt;<br>To: Patrick Summers &lt;p.summers@horizongroup.com&gt;<br>Subject: Thank You for a Successful Partnership</p>
<p>Dear Mr. Summers,</p>
<p>On behalf of the entire team at BlueWave Technologies, I would like to extend our <strong>[1]</strong> gratitude for the outstanding collaboration we have shared over the past three years.</p>
<p>Our partnership has resulted in the successful deployment of three major product lines and the opening of six new markets across Southeast Asia. These achievements would not have been possible <strong>[2]</strong> the commitment and expertise of your team at Horizon Group.</p>
<p>As we look ahead to the next chapter, we are excited about the opportunities that lie before us. We remain fully committed to nurturing and expanding our relationship in ways that continue to benefit both organizations.</p>
<p>Please convey our appreciation to your entire team. We look forward to celebrating many more successes together.</p>
<p>Warm regards,<br>Diana Walsh<br>CEO, BlueWave Technologies</p>`,
    questions: [
      {question:"What word best fills blank [1]?", choices:["sincere","deep","genuine","heartfelt"], answer:3, explanation:"heartfelt gratitude（心からの感謝）はビジネスの感謝状で最も感情的で適切な表現。heartfelt が正解。"},
      {question:"What phrase best fills blank [2]?", choices:["without","except for","but for","regardless of"], answer:2, explanation:"but for（〜がなければ）は仮定的な否定を表す表現。would not have been possible but for the commitment が正解。"},
      {question:"How many new markets were opened during the partnership?", choices:["Three","Four","Six","Eight"], answer:2, explanation:"「東南アジア全体で6つの新市場が開拓された」と明記されている。"},
      {question:"What is the main purpose of this email?", choices:["To announce a contract renewal","To introduce a new product","To express gratitude for a successful partnership","To propose a new project"], answer:2, explanation:"「3年間のパートナーシップに対して感謝を表すため」というメールの主な目的。"}
    ]
  }
];
