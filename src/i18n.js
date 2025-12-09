import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: {
        translation: {
          header: {
            logo: "Литсам",
            home: "Главная",
            functional: "Функциональные возможности",
            activity: "Научная деятельность",
            request: "Оставить заявку"
          },
          main: {
            seed: "Новый уровень управления",
            title: "Автономный разум на орбите",
            subtitle:
              "Мультиагентный подход нового поколения в управлении орбитальными группировками.",
            focusTitle: "Что мы решаем:",
            focus1: "Распределение заявок на съёмку поверхности Земли",
            focus2: "Планирование работы наземных средств",
            focus3: "Маршрутизация обмена данными между спутниками",
            focus4: "Автоматизация смены режимов полёта КА",
            more: "Подробнее о возможностях"
          },
          management: {
            title: "Интерактивное управление и анализ",
            description:
              "Система предоставляет расширенные возможности по заданию параметров наблюдений, планированию миссий, контролю выполнения и анализу результатов в едином интерфейсе.",
            cards: {
              card1: {
                title: "Конфигурирование параметров",
                text: "Пользователь задаёт специфику наблюдения через удобные формы, указывая координаты, временные рамки и приоритеты для космических аппаратов и наземных станций."
              },
              card2: {
                title: "Планирование миссий",
                text: "Система позволяет формировать детализированные задачи и сценарии съёмки, оптимизируя распределение ресурсов и маршрутов для группировки спутников."
              },
              card3: {
                title: "Мониторинг и контроль процессов",
                text: "Отслеживание текущего состояния задач с визуализацией маршрутов, графиков коммуникаций и статусов выполнения в режиме реального времени."
              },
              card4: {
                title: "Результаты и отчётность",
                text: "Предоставление развернутых отчётов и статистики по итогам выполнения миссий с возможностью экспорта данных для дальнейшего анализа."
              }
            }
          },
          description: {
            title: "Архитектура и назначение продукта",
            text:
              "Программный комплекс предназначен для автономного группового управления многоспутниковыми группировками малых космических аппаратов наблюдения Земли и околоземного космоса с минимальным участием наземного комплекса управления.",
            cards: {
              card1: {
                title: "База данных",
                text: "Хранение и организация информации о спутниках, их орбитах и состоянии в реальном времени."
              },
              card2: {
                title: "Интерфейс управления",
                text: "Удобная панель для взаимодействия с системой и мониторинга работы многоспутниковой группировки."
              },
              card3: {
                title: "Движок моделирования",
                text: "Имитационное моделирование для тестирования сценариев и оптимизации параметров системы управления."
              },
              card4: {
                title: "Алгоритмическое ПО",
                text: "Библиотека с классическими подходами, нейросетями и ИИ для оптимального управления спутниками."
              }
            }
          },
          process: {
            title: "Процесс работы системы",
            description:
              "Пошаговая схема показывает, как легко начать работу с продуктом: от инициализации и простого входа до полной автоматизации задач, интеграции с внешними сервисами и обеспечения безопасности всех операций.",
            steps: {
              step1: {
                title: "Оператор запускает систему",
                text:
                  "Система разворачивается на сервере и готова к работе после быстрой установки и инициализации базы данных."
              },
              step2: {
                title: "Работа через веб-интерфейс",
                text:
                  "Оператор авторизуется в удобной панели управления через браузер и получает доступ ко всем функциям."
              },
              step3: {
                title: "Выбор объекта и регистрация событий",
                text:
                  "Все основные действия (выбор объекта, регистрация или редактирование событий, мониторинг) выполняются через интуитивный интерфейс."
              },
              step4: {
                title: "Автоматизация рутинных задач",
                text:
                  "Система автоматически фиксирует важные события, ведёт логи и отслеживает ключевые показатели эффективности."
              },
              step5: {
                title: "Быстрая интеграция",
                text:
                  "Легко подключается к другим сервисам, поддерживает расширение и подключение дополнительного оборудования."
              },
              step6: {
                title: "Безопасность и контроль",
                text:
                  "Доступ защищён, все действия операторов фиксируются для прозрачности и безопасной работы."
              }
            }
          },
          interface: {
            title: "Демонстрация интерфейса системы",
            tabs: {
              technical: {
                title: "Техническая инфраструктура",
                description:
                  "Конфигурирование устройств и режимов работы. Каталоги, параметры и схемы, определяющие структуру и возможности комплекса."
              },
              operational: {
                title: "Операционное управление",
                description:
                  "Рабочие интерфейсы, инструменты визуализации и процессное моделирование для управления группой МКА."
              },
              analytics: {
                title: "Аналитика и результат",
                description:
                  "Таблицы событий, метрики и журналы заявок, отражающие процесс и итоги работы в системе."
              }
            }
          },
          contacts: {
            locationTitle: "Наша локация",
            contactTitle: "Связаться с нами",
            addressLabel: "Адрес:",
            phoneLabel: "Телефон:",
            emailLabel: "Почта:",
            addressValue: "199178, Санкт-Петербург, 14 линия, д.39",
            mapTitle: "Карта Яндекс"
          },
          footer: {
            copyright: "Copyright 2025 © | All Rights Reserved",
            madeBy: "Made by"
          },
          request: {
            title: "Свяжитесь с нами",
            description: "Отправьте нам сообщение, и мы свяжемся с вами в ближайшее время",
            fields: {
              name: {
                label: "Имя",
                placeholder: "Ваше имя"
              },
              email: {
                label: "Email",
                placeholder: "ваш@email.com"
              },
              phone: {
                label: "Телефон",
                placeholder: "+7 (999) 999-99-99"
              },
              message: {
                label: "Сообщение",
                placeholder: "Ваше сообщение..."
              }
            },
            submit: {
              default: "Отправить",
              sending: "Отправка..."
            },
            status: {
              success: "Сообщение успешно отправлено!",
              error: "Ошибка при отправке. Попробуйте ещё раз."
            }
          },
          downloads: {
            title: "Скачать документы",
            description: "Здесь вы найдёте все необходимые PDF-файлы и документы для скачивания.",
            downloadButton: "Скачать",
            files: {
              file1: {
                title: "Проактивное управление группировками космических аппаратов наблюдения.",
                description: "Научный доклад о методологии и программном комплексе для проактивного планирования и автономного группового управления многоспутниковыми орбитальными группировками ДЗЗ с использованием оптимизационных, многоагентных и нейросетевых технологий, повышающих эффективность съёмки и доставки данных."
              },
            }
          },
          functional: {
            title: "Функциональные возможности",
            blocks: {
              block1: {
                title: "Программный комплекс автономного группового управления многоспутниковыми группировками МКА",
                text:
                  "ЭО ПК АГУ МГ МКА — это программный комплекс для моделирования, отладки и демонстрации технологий автономного управления многоспутниковыми группировками малых космических аппаратов наблюдения Земли. Система позволяет проверять и оптимизировать модельно-алгоритмические решения перед их внедрением в реальные космические миссии."
              },
              block2: {
                title: "Назначение комплекса",
                text:
                  "Продукт предназначен для:\n- экспериментальной проверки технологий распределённого автономного управления группировкой МКА;\n- оценки эффективности алгоритмов планирования целевого применения;\n- моделирования взаимодействия космических аппаратов между собой и с наземной инфраструктурой;\n- сквозного анализа выполнения заявок ДЗЗ: от момента появления цели до передачи данных на Землю.\nКомплекс имитирует работу распределённой группировки, организованной в кластеры с лидирующими и ведомыми аппаратами, полностью воспроизводя логику обмена данными, принятия решений и управления полётом."
              },
              block3: {
                title: "Ключевые возможности",
                text:
                  "1. Имитационное моделирование работы группировки:\n- дискретно-событийная модель;\n- создание программных “агентов” для каждого МКА;\n- моделирование динамики орбит, энергетики, связи и передачи данных;\n- автоматическое формирование очереди событий и обработка в режиме модельного времени.\n\n2. Автономное планирование целевого применения:\nКаждый аппарат формирует собственный план работы на основе:\n- новых поступающих заявок;\n- текущего состояния кластера;\n- окон связи с НП и другими КА;\n- энергетических ограничений (заряд АКБ);\n- ограничений по освещённости и геометрии съёмки.\n\n3. Распределение заявок ДЗЗ между аппаратами:\n- распределение/перераспределение заявок внутри кластера;\n- межкластерное перераспределение;\n- оптимизация выполнения заявок с учётом видимости и ограничений автономного управления.\n\n4. Моделирование передачи данных:\n- планирование передачи данных на НП;\n- оценка возможностей межспутниковой связи;\n- подбор оптимальных маршрутов доставки данных.\n\n5. Полный набор инструментов для подготовки и анализа данных:\n- интерфейс включает формы для задания различных параметров;\n- доступны логи выполнения заявок, планы съёмок и полёта, статистика эффективности, отладочные логи СМАО и движка."
              },
              block4: {
                title: "Архитектура комплекса",
                text:
                  "Программный комплекс включает:\n- базу данных PostgreSQL;\n- рабочее место оператора (АРМ) с пользовательским интерфейсом;\n- движок имитационного моделирования;\n- библиотеку СМАО (модельно-алгоритмическое обеспечение);\n- информационную шину для обмена данными между модулями.\nИменно библиотека СМАО является ядром системы, обеспечивая реализацию поведения МКА и их взаимодействия."
              },
              block5: {
                title: "Технологический стек и требования",
                text:
                  "Операционная среда:\n- Astra Linux;\n- Google Chrome;\n- JDK 17;\n- Node.js 16.20.2 / npm;\n- GCC 9.4.0;\n- Python 3.10;\n- PostgreSQL 12.20;\n- Qt, qmake (для сборки СМАО и ИМ).\n\nМинимальные аппаратные требования:\n- Intel Core i5 (6-ядерный, 2.9–4.3 ГГц);\n- 8 ГБ RAM, SSD 128+ ГБ;\n- Монитор 27″, IPS, 1920×1080."
              },
              block6: {
                title: "Функциональные модули интерфейса",
                text:
                  "Модули подготовки данных:\n- наземные пункты;\n- космические аппараты и орбитальные группировки;\n- модели устройств КА;\n- параметры времени;\n- каталог целей и заявки.\n\nМодули промежуточных расчётов:\n- КА-НП (план сеансов связи);\n- КА-КА (межспутниковая связь).\n\nМодули анализа результатов:\n- лог выполнения заявок;\n- лог передачи данных;\n- статистика;\n- планы съёмок и полёта;\n- логи движка и событий."
              }
            }
          },
          
        }
      },
      en: {
        translation: {
          header: {
            logo: "Litsam",
            home: "Home",
            functional: "Functional features",
            activity: "Scientific activity",
            request: "Leave a request"
          },
          main: {
            seed: "A new level of control",
            title: "Autonomous intelligence in orbit",
            subtitle:
              "A next-generation multi-agent approach to managing orbital constellations.",
            focusTitle: "What we solve:",
            focus1: "Tasking distribution for Earth surface imaging",
            focus2: "Planning of ground segment operations",
            focus3: "Routing of data exchange between satellites",
            focus4: "Automation of spacecraft mode changes",
            more: "Learn more about capabilities"
          },
          management: {
            title: "Interactive control and analysis",
            description:
              "The system provides advanced capabilities for defining observation parameters, planning missions, monitoring execution and analyzing results in a single interface.",
            cards: {
              card1: {
                title: "Configuration of parameters",
                text: "The user specifies observation details via convenient forms, setting coordinates, time windows and priorities for spacecraft and ground stations."
              },
              card2: {
                title: "Mission planning",
                text: "The system enables creation of detailed tasks and imaging scenarios, optimizing resource allocation and routes for the satellite constellation."
              },
              card3: {
                title: "Process monitoring and control",
                text: "Tracking the current task status with visualization of routes, communication schedules and execution states in real time."
              },
              card4: {
                title: "Results and reporting",
                text: "Providing detailed reports and statistics on mission completion with the ability to export data for further analysis."
              }
            }
          },
          description: {
            title: "Product architecture and purpose",
            text:
              "The software suite is designed for autonomous group control of multi-satellite constellations of small spacecraft observing the Earth and near-Earth space with minimal involvement of the ground control segment.",
            cards: {
              card1: {
                title: "Database",
                text: "Storage and organization of information about satellites, their orbits and real-time status."
              },
              card2: {
                title: "Control interface",
                text: "A convenient panel for interacting with the system and monitoring the operation of the multi-satellite constellation."
              },
              card3: {
                title: "Simulation engine",
                text: "Simulation for testing scenarios and optimizing control system parameters."
              },
              card4: {
                title: "Algorithmic software",
                text: "A library of classical methods, neural networks and AI for optimal satellite control."
              }
            }
          },
          process: {
            title: "System operation workflow",
            description:
              "The step-by-step scheme shows how easy it is to start working with the product: from initialization and simple login to full task automation, integration with external services, and ensuring the security of all operations.",
            steps: {
              step1: {
                title: "Operator starts the system",
                text:
                  "The system is deployed on the server and ready for operation after quick installation and database initialization."
              },
              step2: {
                title: "Work via web interface",
                text:
                  "The operator logs into a convenient control panel via a browser and gains access to all functions."
              },
              step3: {
                title: "Object selection and event registration",
                text:
                  "All main actions (selecting an object, registering or editing events, monitoring) are performed through an intuitive interface."
              },
              step4: {
                title: "Automation of routine tasks",
                text:
                  "The system automatically records important events, keeps logs, and tracks key performance indicators."
              },
              step5: {
                title: "Fast integration",
                text:
                  "It easily connects to other services and supports extension and connection of additional equipment."
              },
              step6: {
                title: "Security and control",
                text:
                  "Access is protected, and all operator actions are recorded to ensure transparency and safe operation."
              }
            }
          },
          interface: {
            title: "System interface showcase",
            tabs: {
              technical: {
                title: "Technical infrastructure",
                description:
                  "Configuration of devices and operating modes. Catalogs, parameters and schemes that define the structure and capabilities of the system."
              },
              operational: {
                title: "Operational control",
                description:
                  "Working interfaces, visualization tools and process modeling for managing the small satellite constellation."
              },
              analytics: {
                title: "Analytics and results",
                description:
                  "Event tables, metrics and request logs that reflect the process and outcomes of system operation."
              }
            }
          },
          contacts: {
            locationTitle: "Our location",
            contactTitle: "Contact us",
            addressLabel: "Address:",
            phoneLabel: "Phone:",
            emailLabel: "Email:",
            addressValue: "199178, Saint Petersburg, 14th line, 39",
            mapTitle: "Yandex map"
          },
          footer: {
            copyright: "Copyright 2025 © | All Rights Reserved",
            madeBy: "Made by"
          },
          request: {
            title: "Contact us",
            description: "Send us a message and we will get back to you shortly",
            fields: {
              name: {
                label: "Name",
                placeholder: "Your name"
              },
              email: {
                label: "Email",
                placeholder: "your@email.com"
              },
              phone: {
                label: "Phone",
                placeholder: "+1 (555) 555-55-55"
              },
              message: {
                label: "Message",
                placeholder: "Your message..."
              }
            },
            submit: {
              default: "Send",
              sending: "Sending..."
            },
            status: {
              success: "Message sent successfully!",
              error: "Error while sending. Please try again."
            }
          },
          downloads: {
            title: "Download documents",
            description: "Here you can find all required PDF files and documents for download.",
            downloadButton: "Download",
            files: {
              file1: {
                title: "Proactive Control of Earth Observation Satellite Constellations",
                description: "A scientific report on the methodology and software framework for proactive planning and autonomous group control of multi-satellite Earth observation constellations using optimization, multi-agent, and neural network technologies that increase the efficiency of imaging and data delivery."
              }
            }
          },
          functional: {
            title: "Functional features",
            blocks: {
              block1: {
                title: "Software suite for autonomous group control of multi-satellite constellations of small spacecraft",
                text:
                  "EO PC AGU MG MKA is a software suite for modeling, debugging and demonstrating technologies for autonomous control of multi-satellite constellations of small Earth observation spacecraft. The system makes it possible to verify and optimize model- and algorithm-based solutions before deploying them in real space missions."
              },
              block2: {
                title: "Purpose of the suite",
                text:
                  "The product is intended for:\n" +
                  "- experimental validation of technologies for distributed autonomous control of a small-satellite constellation;\n" +
                  "- evaluating the efficiency of target planning algorithms;\n" +
                  "- modeling the interaction of spacecraft with each other and with the ground infrastructure;\n" +
                  "- end-to-end analysis of EO request execution: from the moment a target appears to the delivery of data to the ground.\n" +
                  "The suite emulates the operation of a distributed constellation organized into clusters with leading and follower spacecraft, fully reproducing the logic of data exchange, decision-making and flight control."
              },
              block3: {
                title: "Key capabilities",
                text:
                  "1. Simulation modeling of constellation operation:\n" +
                  "- discrete-event model;\n" +
                  "- creation of software “agents” for each spacecraft;\n" +
                  "- modeling of orbit dynamics, power, communications and data transfer;\n" +
                  "- automatic formation of the event queue and processing in model time.\n\n" +
                  "2. Autonomous target planning:\n" +
                  "Each spacecraft builds its own work plan based on:\n" +
                  "- newly received requests;\n" +
                  "- current cluster state;\n" +
                  "- communication windows with ground stations and other spacecraft;\n" +
                  "- power limitations (battery charge);\n" +
                  "- illumination and imaging geometry constraints.\n\n" +
                  "3. Distribution of EO requests between spacecraft:\n" +
                  "- distribution/redistribution of requests within a cluster;\n" +
                  "- inter-cluster redistribution;\n" +
                  "- optimization of request execution taking into account visibility and autonomous control constraints.\n\n" +
                  "4. Data transfer modeling:\n" +
                  "- planning data downlink to ground stations;\n" +
                  "- assessing inter-satellite communication capabilities;\n" +
                  "- selecting optimal routes for data delivery.\n\n" +
                  "5. Full toolset for data preparation and analysis:\n" +
                  "- the interface includes forms for configuring various parameters;\n" +
                  "- execution logs, imaging and flight plans, efficiency statistics, debug logs of the SMAO library and simulation engine are available."
              },
              block4: {
                title: "Suite architecture",
                text:
                  "The software suite includes:\n" +
                  "- a PostgreSQL database;\n" +
                  "- an operator workstation (HMI) with a user interface;\n" +
                  "- a simulation engine;\n" +
                  "- an SMAO library (model- and algorithm-based support);\n" +
                  "- an information bus for data exchange between modules.\n" +
                  "The SMAO library is the core of the system, implementing spacecraft behavior and their interaction."
              },
              block5: {
                title: "Technology stack and requirements",
                text:
                  "Operating environment:\n" +
                  "- Astra Linux;\n" +
                  "- Google Chrome;\n" +
                  "- JDK 17;\n" +
                  "- Node.js 16.20.2 / npm;\n" +
                  "- GCC 9.4.0;\n" +
                  "- Python 3.10;\n" +
                  "- PostgreSQL 12.20;\n" +
                  "- Qt, qmake (for building SMAO and the simulation engine).\n\n" +
                  "Minimum hardware requirements:\n" +
                  "- Intel Core i5 (6 cores, 2.9–4.3 GHz);\n" +
                  "- 8 GB RAM, 128+ GB SSD;\n" +
                  "- 27″ IPS monitor, 1920×1080."
              },
              block6: {
                title: "Functional interface modules",
                text:
                  "Data preparation modules:\n" +
                  "- ground stations;\n" +
                  "- spacecraft and orbital constellations;\n" +
                  "- spacecraft device models;\n" +
                  "- time parameters;\n" +
                  "- target catalog and requests.\n\n" +
                  "Intermediate calculation modules:\n" +
                  "- SC–GS (communication session planning);\n" +
                  "- SC–SC (inter-satellite communication).\n\n" +
                  "Result analysis modules:\n" +
                  "- request execution log;\n" +
                  "- data transfer log;\n" +
                  "- statistics;\n" +
                  "- imaging and flight plans;\n" +
                  "- engine and event logs."
              }
            }
          }
          
        }
      },
      zh: {
        translation: {
          header: {
            logo: "利萨姆",
            home: "主页",
            functional: "功能特性",
            activity: "科学活动",
            request: "提交申请"
          },
          main: {
            seed: "全新级别的管理",
            title: "轨道上的自主智能",
            subtitle: "用于管理轨道星座的新一代多智能体方法。",
            focusTitle: "我们解决什么问题：",
            focus1: "地球表面成像任务的分配",
            focus2: "地面站工作的规划",
            focus3: "卫星之间数据交换的路由",
            focus4: "航天器飞行模式的自动切换",
            more: "了解更多功能"
          },
          management: {
            title: "交互式管理与分析",
            description:
              "系统在单一界面中提供观测参数设定、任务规划、执行监控和结果分析的高级功能。",
            cards: {
              card1: {
                title: "参数配置",
                text: "用户通过便捷的表单设置观测细节，包括坐标、时间范围以及航天器和地面站的优先级。"
              },
              card2: {
                title: "任务规划",
                text: "系统支持构建详细的成像任务和场景，并为星座优化资源分配和轨迹规划。"
              },
              card3: {
                title: "监控与过程控制",
                text: "实时跟踪任务状态，并可视化显示轨迹、通信时序和执行状态。"
              },
              card4: {
                title: "结果与报告",
                text: "提供任务结果的详细报告和统计，并支持导出数据以供进一步分析。"
              }
            }
          },
          description: {
            title: "产品架构与用途",
            text:
              "该软件系统旨在以最少的地面控制参与，实现对地球与近地空间观测的小型多星座航天器的自治群控。",
            cards: {
              card1: {
                title: "数据库",
                text: "用于存储和管理有关卫星、轨道及其实时状态的信息。"
              },
              card2: {
                title: "控制界面",
                text: "用于与系统交互并监控多星座运行情况的便捷控制面板。"
              },
              card3: {
                title: "仿真引擎",
                text: "通过仿真测试场景并优化控制系统参数。"
              },
              card4: {
                title: "算法软件",
                text: "包含经典方法、神经网络和人工智能的库，用于实现最优卫星控制。"
              }
            }
          },
          process: {
            title: "系统工作流程",
            description:
              "分步流程展示了从初始化和简单登录，到任务全面自动化、与外部服务集成以及保障所有操作安全的完整使用路径。",
            steps: {
              step1: {
                title: "操作员启动系统",
                text:
                  "系统在服务器上部署完成后，经过快速安装与数据库初始化即可投入使用。"
              },
              step2: {
                title: "通过网页界面工作",
                text:
                  "操作员在浏览器中登录到便捷的控制面板，获取对所有功能的访问权限。"
              },
              step3: {
                title: "选择对象并登记事件",
                text:
                  "所有关键操作（选择对象、登记或编辑事件、监控等）都通过直观的界面完成。"
              },
              step4: {
                title: "日常任务自动化",
                text:
                  "系统自动记录重要事件、保存日志，并跟踪关键绩效指标。"
              },
              step5: {
                title: "快速集成",
                text:
                  "可轻松对接其他服务，支持扩展以及连接附加设备。"
              },
              step6: {
                title: "安全与管控",
                text:
                  "访问过程受到保护，所有操作员行为都会被记录，以确保透明性和安全运行。"
              }
            }
          },
          interface: {
            title: "系统界面演示",
            tabs: {
              technical: {
                title: "技术基础设施",
                description:
                  "配置设备和工作模式的参数。用于定义系统结构与能力的目录、参数和示意图。"
              },
              operational: {
                title: "运营控制",
                description:
                  "用于管理小型航天器星座的工作界面、可视化工具和流程建模。"
              },
              analytics: {
                title: "分析与结果",
                description:
                  "展示系统运行过程与结果的事件表、指标和请求日志。"
              }
            }
          },
          contacts: {
            locationTitle: "我们的地址",
            contactTitle: "联系我们",
            addressLabel: "地址：",
            phoneLabel: "电话：",
            emailLabel: "邮箱：",
            addressValue: "199178，圣彼得堡，第14街，39号",
            mapTitle: "Yandex 地图"
          },
          footer: {
            copyright: "Copyright 2025 © | 保留所有权利",
            madeBy: "开发者"
          },
          request: {
            title: "联系我们",
            description: "请发送消息，我们会尽快与您取得联系。",
            fields: {
              name: {
                label: "姓名",
                placeholder: "您的姓名"
              },
              email: {
                label: "邮箱",
                placeholder: "your@email.com"
              },
              phone: {
                label: "电话",
                placeholder: "+86 138 0000 0000"
              },
              message: {
                label: "留言",
                placeholder: "您的留言..."
              }
            },
            submit: {
              default: "发送",
              sending: "发送中..."
            },
            status: {
              success: "消息已成功发送！",
              error: "发送失败，请重试。"
            }
          },
          downloads: {
            title: "文档下载",
            description: "在这里可以找到所有需要下载的 PDF 文件和相关文档。",
            downloadButton: "下载",
            files: {
              file1: {
                title: "对地观测卫星星座的前瞻性控制",
                description: "一篇关于前瞻性规划和多卫星星座自主群体控制的方法论及软件平台的科研报告，利用优化、多智能体和神经网络等技术，提高成像和数据传输的效率。"
              }              
            }
          },
          functional: {
            title: "功能特性",
            blocks: {
              block1: {
                title: "用于多小卫星星座自主群控的软件系统",
                text:
                  "EO PC AGU MG MKA 是一套用于对地观测小型多卫星星座进行自治控制的建模、调试和技术演示的软件系统。该系统可在实际航天任务部署之前，对模型与算法层面的解决方案进行验证和优化。"
              },
              block2: {
                title: "系统用途",
                text:
                  "本产品用于：\n" +
                  "- 对多小卫星星座分布式自治控制技术进行实验验证；\n" +
                  "- 评估目标任务规划算法的有效性；\n" +
                  "- 建模航天器之间以及航天器与地面基础设施之间的交互；\n" +
                  "- 对遥感任务执行进行端到端分析：从目标出现到数据下传地面的全过程。\n" +
                  "系统仿真由多个集群组成的分布式星座，其中包括主星和从星，完整再现数据交换、决策制定和飞行控制的逻辑。"
              },
              block3: {
                title: "关键功能",
                text:
                  "1. 星座运行的仿真建模：\n" +
                  "- 离散事件模型；\n" +
                  "- 为每一颗航天器创建软件“智能体”；\n" +
                  "- 建模轨道动力学、能源、通信和数据传输；\n" +
                  "- 自动生成事件队列，并在模型时间内进行处理。\n\n" +
                  "2. 自主目标任务规划：\n" +
                  "每颗航天器根据以下因素形成自身的工作计划：\n" +
                  "- 新到达的任务请求；\n" +
                  "- 集群的当前状态；\n" +
                  "- 与地面站及其他航天器的通信窗口；\n" +
                  "- 能源约束（电池电量）；\n" +
                  "- 光照条件和成像几何约束。\n\n" +
                  "3. 遥感任务在航天器之间的分配：\n" +
                  "- 集群内部的任务分配/再分配；\n" +
                  "- 集群之间的任务再分配；\n" +
                  "- 在可见性与自治控制约束条件下，对任务执行进行优化。\n\n" +
                  "4. 数据传输建模：\n" +
                  "- 规划向地面站的数据下传；\n" +
                  "- 评估星间通信能力；\n" +
                  "- 选择数据传输的最优路由。\n\n" +
                  "5. 完整的数据准备与分析工具集：\n" +
                  "- 界面中提供用于配置各类参数的表单；\n" +
                  "- 可查看任务执行日志、成像与飞行计划、效率统计、SMAO 库以及仿真引擎的调试日志。"
              },
              block4: {
                title: "系统架构",
                text:
                  "软件系统包括：\n" +
                  "- PostgreSQL 数据库；\n" +
                  "- 带有人机界面的操作员工作站；\n" +
                  "- 仿真引擎；\n" +
                  "- SMAO 库（模型与算法支持）；\n" +
                  "- 用于模块间数据交换的信息总线。\n" +
                  "其中 SMAO 库是系统的核心，负责实现航天器行为及其交互。"
              },
              block5: {
                title: "技术栈与要求",
                text:
                  "运行环境：\n" +
                  "- Astra Linux；\n" +
                  "- Google Chrome；\n" +
                  "- JDK 17；\n" +
                  "- Node.js 16.20.2 / npm；\n" +
                  "- GCC 9.4.0；\n" +
                  "- Python 3.10；\n" +
                  "- PostgreSQL 12.20；\n" +
                  "- Qt、qmake（用于构建 SMAO 和仿真引擎）。\n\n" +
                  "最低硬件要求：\n" +
                  "- Intel Core i5（6 核，2.9–4.3 GHz）；\n" +
                  "- 8 GB 内存，128 GB 及以上 SSD；\n" +
                  "- 27 英寸 IPS 显示器，1920×1080 分辨率。"
              },
              block6: {
                title: "界面功能模块",
                text:
                  "数据准备模块：\n" +
                  "- 地面站；\n" +
                  "- 航天器与轨道星座；\n" +
                  "- 航天器设备模型；\n" +
                  "- 时间参数；\n" +
                  "- 目标目录与任务请求。\n\n" +
                  "中间计算模块：\n" +
                  "- SC–GS（星地通信会话规划）；\n" +
                  "- SC–SC（星间通信）。\n\n" +
                  "结果分析模块：\n" +
                  "- 任务执行日志；\n" +
                  "- 数据传输日志；\n" +
                  "- 统计分析；\n" +
                  "- 成像与飞行计划；\n" +
                  "- 仿真引擎和事件日志。"
              }
            }
          }
          
        }
      }
    },
    fallbackLng: "ru",
    supportedLngs: ["ru", "en", "zh"],
    detection: {
      order: ["localStorage", "cookie", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"]
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
