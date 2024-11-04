import { makeAutoObservable } from "mobx";

export abstract class Locale {
  mainHeader?: string;
  aboutUsHeader?: string;
  teamText?: string;
  language!: string;
  contacUsButton!: string;
  logo!: string;
  platformText!: string;
  platformBoldText!: string;
  brieflyAboutUsHeading!: string;
  brieflyAboutUSText!: string;
  advantagesHeading!: string;
  advantagesPhoto!: string;
  strategyHeading!: string;
  strategyPhoto!: string;
  teamHeading!: string;
  sukhonosNameText!: string;
  sukhonosMiddleText!: string;
  sukhonosMainText!: string;
  orlovNameText!: string;
  orlovMiddleText!: string;
  orlovMainText!: string;
  shvedovNameText!: string;
  shvedovMiddleText!: string;
  shvedovMainText!: string;
  shcherbakovNameText!: string;
  shcherbakovMiddleText!: string;
  shcherbakovMainText!: string;
  vovkNameText!: string;
  vovkMiddleText!: string;
  vovkMainText!: string;
  savvaNameText!: string;
  savvaMiddleText!: string;
  savvaMainText!: string;
  losevNameText!: string;
  losevMiddleText!: string;
  losevMainText!: string;
  brylovNameText!: string;
  brylovMiddleText!: string;
  brylovMainText!: string;
  frolovaNameText!: string;
  frolovaMiddleText!: string;
  frolovaMainText!: string;
  cooperationHeading!: string;
  cooperationText!: string;
  slogan!: string;
  mainFooter!: string;
  aboutUsFooter!: string;
  teamFooter!: string;
  logoFooter!: string;
  adressFooter!: string;
  workingHoursFooter!: string;
  buttonUpTextFooter!: string;
  moneyText!: string;
  studentText!: string;
  purposeText!: string;
  protectText!: string;
  responsibilityText!: string;
  lockText!: string;
  transparencyText!: string;
  copyrightText!: string;
  effectivenessText!: string;
}

export class EnglishLocale implements Locale {
  buttonUpTextFooter = "up";
  workingHoursFooter = " Monday-Friday, from 9.0 to 18.00";
  adressFooter = "Moscow, Innovatsionnaya str. 1, office 101";
  logoFooter = `${process.env.PUBLIC_URL}/logoFooter.png`;
  mainFooter = "Main";
  aboutUsFooter = "About us";
  teamFooter = "Team";
  slogan = "IDP is your partner in the world of innovation! ";
  cooperationText =
    "We invite potential customers not only to study and implement our ready-made technologies, but also to apply to us for effective solutions to technical problems of any complexity. IDP's community of engineers and inventors are distinguished by their deep experience and commitment to developing innovative solutions that are world-class.";
  cooperationHeading = "Cooperation";
  sukhonosNameText = "Sukhonos Sergey";
  sukhonosMiddleText =
    "PhD in Technical Sciences, serial entrepreneur and inventor";
  sukhonosMainText =
    "Development and launch into production in 1992 of a new type of diamond tools. Today the range includes more than 1000 types of tools for industry, construction, dentistry, which have";
  orlovNameText = "Orlov Dmitry";
  orlovMiddleText = "inventor and developer of new technologies";
  orlovMainText =
    "Fundamental developments in tinting and supply of paint products, development and production of plant growth stimulant, which received European quality certificate. Expansion of activities to the international level with the successful launch of production facilities in Hungary and Kyrgyzstan, as well as";
  shvedovNameText = "Shvedov Andrey";
  shvedovMiddleText =
    "a successful entrepreneur with extensive experience of doing business in Europe";
  shvedovMainText =
    "Successful launch of the Japanese company Brother in the Russian and CIS markets, founding and growth of Eurasia. Leadership in Aquamdeco, a leading producer of organic growth stimulants. Expansion of the sales market for game consoles to the entire Eastern European region and the development of";
  shcherbakovNameText = "Shcherbakov Andrey";
  shcherbakovMiddleText =
    "PhD in Economics, an outstanding electromechanical engineer";
  shcherbakovMainText =
    "KMM pumps created under his leadership are unparalleled in terms of efficiency and durability. Kurs NPO products are successfully used in leading industries in Russia and abroad - from India to Latin America and South-East Asia, including Cuba, Ecuador, Vietnam and Bangladesh. The service life of KMM pumps ";
  vovkNameText = "Vovk Dmitry ";
  vovkMiddleText = "chemist, Ph.D.";
  vovkMainText =
    "Developed technologies and organized the production of various fire extinguishing agents used in the military sector, EMERCOM and nuclear industry. Developed and implemented innovative materials to improve energy efficiency and fire safety, which are widely used in construction. Developed and organized";
  savvaNameText = "Savva Vladimir";
  savvaMiddleText = "an outstanding engineer and inventor";
  savvaMainText =
    "Creation of seven new pumps with 80% efficiency for marine and diesel locomotive diesel engines, successful introduction of MDO technology for aluminum alloys, development and production of key components for leading global brands and providing Gazprom with reliable seals. Its products have";
  losevNameText = "Losev Mikhail ";
  losevMiddleText = "serial innovator and technology creator";
  losevMainText =
    "Creation of high-performance pumps and seals, development and implementation of advanced technologies in various industries, including oil and gas and chemical industry, agriculture and defense. Successful partnerships with major companies and government agencies confirm the significance of its";
  brylovNameText = "Brylov Igor";
  brylovMiddleText = "radical automatizer-humanist, developer";
  brylovMainText =
    "Robossembler Framework software won the Innovation Assistance Foundation's CodeDigital open library competition.";
  frolovaNameText = "Frolova Elena";
  frolovaMiddleText =
    "expert and organizer in the field of health care and health insurance";
  frolovaMainText =
    "She made a significant contribution to the system of compulsory medical insurance and the organization of insurance companies with various types of insurance, as well as to the organization of training of medical personnel on the basis of the educational and scientific center. Highly qualified knowledge in the field of the";
  teamHeading = "Our team";
  strategyPhoto = `${process.env.PUBLIC_URL}/strategyeng.png`;
  strategyHeading = "Stages of work";
  advantagesPhoto = `${process.env.PUBLIC_URL}/advantagesEng.png`;
  advantagesHeading = "Our advantages";
  brieflyAboutUSText =
    "TheInnovative Development Platform unites Russia's leading innovators, specialists from various systems, striving for progress and development. The core idea of IDP is to promote the development and commercialization of world-class innovations through interaction between outstanding engineers, inventors and researchers. We provide a platform for sharing knowledge, developing innovative projects and bringing ideas to life, making our community a unique incubator for technological advancement. IDP actively seeks out and supports talent and businesses looking to create innovations that can make a difference in the world.";
  brieflyAboutUsHeading = "Briefly about us";
  platformText =
    "community of like-minded people united to create and promote advanced engineering and technological solutions";
  platformBoldText = "Platform for Innovative Development";
  logo = `${process.env.PUBLIC_URL}/Logoeng.png`;
  contacUsButton = "Contact us";
  teamText = "Team";
  aboutUsHeader = "About us";
  mainHeader = "Main";
  language = "ru";

  moneyText =
    "Rejection of external monetary investments (grants and donations) in favor of a self-financing system based on internal resources of the process participants, which are incentivized by shares (in %, 'chips') of future income when the project is implemented at the exit from the IDP of future income.";
  studentText =
    "Conditional 'chips' serve as a means of payment of the author of the idea for services on the platform, transforming into a financial equivalent only after the successful completion of the project and its realization.";
  purposeText =
    "The final goal of each project is to create a pilot batch of a product ready for scaling into mass production after passing all the necessary stages of expertise and approbation.";
  protectText =
    "The risks associated with the introduction and operation of the innovation are borne by the onae who acquires the development at the exit of the IDP. But at the same time, he gets a development that has been perfectly tested by experts, which minimizes his risks.";
  responsibilityText =
    "Responsibility for the quality of the work is shared among all participants in the process, from the author to the professionals involved in the project.";
  lockText =
    "Registration and storage of data on the platform is carried out using blockchain technology to ensure reliability and transparency of information.";
  effectivenessText =
    "The performance of participants and their projects affects their reputation and position within the platform, incentivizing conscientious work for the sake of overall success.";
  transparencyText =
    "Performance transparency allows all stakeholders to learn about project accomplishments, while keeping information confidential for those directly involved in the development.";
  copyrightText =
    "Copyrights and intellectual property are protected not only by  patents, but also by a special security system that minimizes the risks of misuse of ideas.";
}

export class RussiaLocale implements Locale {
  buttonUpTextFooter = "наверх";
  workingHoursFooter = "Понедельник-пятница, с 9.00-18.00";
  adressFooter = "Москва, ул. Инновационная 1, офис 101";
  logoFooter = `${process.env.PUBLIC_URL}/whitelogo.png`;

  mainFooter = "Главная";
  aboutUsFooter = "О нас";
  teamFooter = "Команда";
  slogan = "ПИР - ваш партнер в мире инноваций!";
  cooperationText =
    "Мы приглашаем потенциальных клиентов не только изучать и внедрять наши готовые технологии, но также обращаться к нам за эффективными решениями технических проблем любой сложности. Сообщество инженеров и изобретателей ПИР отличается глубоким опытом и приверженностью разработке инновационных решений мирового уровня.";
  cooperationHeading = "Сотрудничество";
  sukhonosNameText = "Сухонос Сергей Иванович";
  sukhonosMiddleText =
    "кандидат технических наук, серийный предприниматель и изобретатель";
  sukhonosMainText =
    "Разработка и запуск в производство с 1992 года нового типа алмазных инструментов, превосходящих мировые аналоги по сроку службы в 2–10 раз. Международные поставки продукции в Европу, Америку и Азию. Организация сообществ изобретателей и инноваторов.";
  orlovNameText = "Орлов Дмитрий Алексеевич";
  orlovMiddleText = "изобретатель и разработчик новых технологий";
  orlovMainText =
    "Фундаментальные разработки в области окраски и поставки лакокрасочных продуктов, разработка и производство стимулятора роста растений, который получил сертификат качества Европы. Расширение деятельности на международный уровень с успешным запуском ";
  shvedovNameText = "Шведов Андрей Вячеславович";
  shvedovMiddleText =
    "успешный предприниматель с обширным опытом ведения бизнеса в Европе";
  shvedovMainText =
    "Успешный запуск японской компании Brother на российском и СНГ рынках, основание и развитие Eurasia. Руководство в Aquamdeco, ведущем производителе органических стимуляторов роста. Расширение рынка продаж игровых консолей на весь регион Восточной Европы и разработка ";
  shcherbakovNameText = "Щербаков Андрей Владимирович";
  shcherbakovMiddleText =
    "кандидат экономических наук, выдающийся электромеханический ";
  shcherbakovMainText =
    "Насосы КММ, созданные под его руководством, являются беспрецедентными по эффективности и долговечности. Продукция НПО «Курс» успешно используется в ведущих отраслях России и за рубежом — от Индии до Латинской Америки и Юго-Восточной Азии, включая Кубу, ";
  vovkNameText = "Вовк Дмитрий Николаевич";
  vovkMiddleText = "химик, кандидат химических наук";
  vovkMainText =
    "Разработал технологии и организовал производство различных средств пожаротушения, используемых в военном секторе, МЧС и ядерной промышленности. Разработал и внедрил инновационные материалы для повышения энергоэффективности";
  savvaNameText = "Савва Владимир Викторович";
  savvaMiddleText = "выдающийся инженер и изобретатель";
  savvaMainText =
    "Создание семи новых насосов с КПД 80% для морских и дизель-локомотивных двигателей, успешное внедрение технологии МДО для алюминиевых сплавов, разработка и производство ключевых компонентов для ведущих мировых брендов и обеспечение Газпрома";
  losevNameText = "Лосев Михаил Дмитриевич";
  losevMiddleText = "серийный инноватор и создатель технологий";
  losevMainText =
    "Создание высокопроизводительных насосов и уплотнений, разработка и внедрение передовых технологий в различных отраслях, включая нефтегазовую и химическую промышленность, сельское хозяйство и оборону. Успешные партнёрства с крупными компаниями";
  brylovNameText = "Брылев Игорь Николаевич";
  brylovMiddleText = "радикальный автоматизатор-гуманист и разработчик";
  brylovMainText = `Программное обеспечение Robossembler Framework победило в конкурсе на разработку открытых библиотек Программного обеспечения "Код - Цифровые Технологии" Фонда содействия инновациям.`;
  frolovaNameText = "Фролова Елена Анатольевна";
  frolovaMiddleText =
    "эксперт и организатор в области здравоохранения и медицинского страхования";
  frolovaMainText =
    "Фролова Елена Анатольевна эксперт и организатор в области здравоохранения и медицинского страхования Внесла значительный вклад в систему обязательного медицинского страхования и организацию страховых компаний с различными видами";
  teamHeading = "Наша команда";
  strategyPhoto = `${process.env.PUBLIC_URL}/zW00gdEoKlE.jpg`;
  strategyHeading = "Наша стратегия";
  advantagesPhoto = `${process.env.PUBLIC_URL}/xN9pBmHbcJs.jpg`;
  advantagesHeading = "Наши преимущества";
  brieflyAboutUSText =
    "Платформа инновационного развития объединяет ведущих российских новаторов, специалистов из различных систем, стремящихся к прогрессу и развитию. Основная идея заключается в продвижении разработки и коммерциализации инноваций мирового уровня через взаимодействие выдающихся инженеров, изобретателей и исследователей. Мы предоставляем платформу для обмена знаниями, разработки инновационных проектов и воплощения идей в жизнь, делая наше сообщество уникальным инкубатором технологического прогресса. ПИР(Платформа инновационного развития) активно ищет и поддерживает таланты и предприятия, стремящиеся создавать инновации, способные изменить мир.";
  brieflyAboutUsHeading = "Коротко о нас";
  platformText =
    "сообщество единомышленников, объединённых для создания и продвижения передовых инженерных и технологических решений";
  platformBoldText = "Платформа информационного развития";
  logo = `${process.env.PUBLIC_URL}/Logo.png`;
  contacUsButton = "связаться с нами";
  teamText = "Команда";
  aboutUsHeader = "О нас";
  mainHeader = "Главная";
  language = "en";
  moneyText =
    "Отказ от внешних денежных инвестиций (грантов и пожертвований) в пользу самофинансирования на основе внутренних ресурсов участников процесса, которые мотивируются долями (в процентах, «фишками») будущего дохода при реализации проектана выходе из ПИР.";
  studentText =
    " Условные «фишки» служат средством оплаты автору идеи за услуги на платформе и превращаются в финансовый эквивалент только после успешного завершения проекта и его реализации.";
  purposeText =
    "Конечная цель каждого проекта - создание пилотной партии продукта, готового к масштабированию в серийное производство после прохождения всех необходимых этапов экспертизы и апробации.";
  protectText =
    "Риски, связанные с внедрением и эксплуатацией инновации, несет тот, кто приобретает разработку на выходе из ПИР. В то же время он получает разработку, которая была тщательно протестирована экспертами, что минимизирует его риски.";
  responsibilityText =
    "Ответственность за качество работы распределена между всеми участниками процесса, от автора до специалистов, участвующих в проекте.";
  lockText =
    "Регистрация и хранение данных на платформе осуществляются с использованием технологии блокчейн для обеспечения надежности и прозрачности информации.";
  effectivenessText =
    "Эффективность участников и их проектов влияет на их репутацию и позицию внутри платформы, стимулируя добросовестную работу во имя общего успеха.";
  transparencyText =
    "Авторские права и интеллектуальная собственность защищены не только патентами, но и специальной системой безопасности, которая минимизирует риски неправомерного использования идей.";
  copyrightText =
    "Прозрачность результатов позволяет всем заинтересованным сторонам узнавать о достижениях проектов, сохраняя при этом конфиденциальность информации для тех, кто непосредственно участвует в разработке.";
}

export class StoreLocale {
  locale: Locale = new RussiaLocale();

  constructor() {
    makeAutoObservable(this);
  }

  setLocale(locale: Locale) {
    this.locale = locale;
  }
}
