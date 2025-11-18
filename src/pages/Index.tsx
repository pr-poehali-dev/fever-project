import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <section className="relative overflow-hidden pt-20 pb-32 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(217,70,239,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 bg-gradient-primary rounded-full text-white text-sm font-medium shadow-lg">
                  🎓 Образовательная платформа
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">Обучайся</span>
                <br />
                с удовольствием
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Профессиональные курсы с интерактивными уроками и официальными сертификатами. 
                Начни свой путь к новым знаниям уже сегодня!
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gradient-primary text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg px-8 py-6">
                  Начать обучение
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 text-lg px-8 py-6">
                  Смотреть курсы
                </Button>
              </div>

              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold gradient-text">10,000+</div>
                  <div className="text-sm text-gray-600">Студентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">50+</div>
                  <div className="text-sm text-gray-600">Курсов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">95%</div>
                  <div className="text-sm text-gray-600">Довольны</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in lg:block hidden">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 animate-float"></div>
              <img 
                src="https://cdn.poehali.dev/projects/400d3b67-b615-4234-a03a-41e4730bbed8/files/96c396f7-6736-4268-ac75-d7fb75e7de02.jpg"
                alt="Образовательная платформа"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Почему выбирают <span className="gradient-text">нас</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы создали идеальную среду для эффективного онлайн-обучения
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon name="GraduationCap" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Качественные уроки</h3>
                <p className="text-gray-600 leading-relaxed">
                  Структурированные видео-уроки от практикующих экспертов с многолетним опытом в индустрии
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Award" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Официальные сертификаты</h3>
                <p className="text-gray-600 leading-relaxed">
                  Получите признанные сертификаты после завершения курсов для вашего портфолио
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Поддержка 24/7</h3>
                <p className="text-gray-600 leading-relaxed">
                  Наставники и сообщество всегда готовы помочь вам на каждом этапе обучения
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Популярные <span className="gradient-text">курсы</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите направление и начните учиться прямо сейчас
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Веб-разработка",
                description: "От основ HTML до современных фреймворков",
                icon: "Code2",
                lessons: 45,
                duration: "12 недель",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "Дизайн UI/UX",
                description: "Создание интерфейсов и пользовательского опыта",
                icon: "Palette",
                lessons: 38,
                duration: "10 недель",
                gradient: "from-pink-500 to-orange-500"
              },
              {
                title: "Маркетинг",
                description: "Современные стратегии digital-продвижения",
                icon: "TrendingUp",
                lessons: 32,
                duration: "8 недель",
                gradient: "from-orange-500 to-purple-500"
              }
            ].map((course, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden bg-white">
                <div className={`h-2 bg-gradient-to-r ${course.gradient}`}></div>
                <CardContent className="p-6 space-y-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${course.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={course.icon as any} size={28} className="text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                    <p className="text-gray-600">{course.description}</p>
                  </div>

                  <div className="flex gap-4 text-sm text-gray-500 pt-2">
                    <div className="flex items-center gap-1">
                      <Icon name="BookOpen" size={16} />
                      <span>{course.lessons} уроков</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <Button className="w-full gradient-primary text-white group-hover:shadow-lg transition-all">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Часто задаваемые <span className="gradient-text">вопросы</span>
            </h2>
            <p className="text-xl text-gray-600">
              Ответы на популярные вопросы о наших курсах
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-2xl px-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-100">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-md">
                    <Icon name="HelpCircle" size={20} className="text-white" />
                  </div>
                  Сколько времени займет обучение?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 pl-14 text-base leading-relaxed">
                Длительность курсов варьируется от 8 до 12 недель в зависимости от программы. Вы можете учиться в своем темпе — все материалы доступны 24/7, и вы сами выбираете удобный график занятий.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-2xl px-6 bg-gradient-to-r from-pink-50 to-orange-50 border-pink-100">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-md">
                    <Icon name="Award" size={20} className="text-white" />
                  </div>
                  Признаются ли ваши сертификаты?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 pl-14 text-base leading-relaxed">
                Да, наши сертификаты признаются работодателями по всему миру. После успешного завершения курса вы получаете официальный сертификат, который можно добавить в LinkedIn, резюме и портфолио.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-2xl px-6 bg-gradient-to-r from-orange-50 to-purple-50 border-orange-100">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-md">
                    <Icon name="CreditCard" size={20} className="text-white" />
                  </div>
                  Какие способы оплаты доступны?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 pl-14 text-base leading-relaxed">
                Мы принимаем все основные банковские карты, электронные кошельки и предлагаем рассрочку на 6 месяцев без переплат. Также доступен бесплатный пробный период 7 дней для новых студентов.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-2xl px-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-100">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-md">
                    <Icon name="Users" size={20} className="text-white" />
                  </div>
                  Есть ли поддержка от преподавателей?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 pl-14 text-base leading-relaxed">
                Да, каждый студент получает доступ к персональному наставнику и активному сообществу. Вы можете задавать вопросы в чате поддержки 24/7, участвовать в еженедельных онлайн-встречах и получать обратную связь по домашним заданиям.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-2xl px-6 bg-gradient-to-r from-pink-50 to-orange-50 border-pink-100">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-md">
                    <Icon name="Laptop" size={20} className="text-white" />
                  </div>
                  Нужны ли специальные знания для старта?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 pl-14 text-base leading-relaxed">
                Нет, большинство наших курсов рассчитаны на начинающих. Мы начинаем с основ и постепенно переходим к более продвинутым темам. Для некоторых специализированных курсов могут потребоваться базовые знания — это всегда указано в описании.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-2xl px-6 bg-gradient-to-r from-orange-50 to-purple-50 border-orange-100">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-md">
                    <Icon name="RefreshCw" size={20} className="text-white" />
                  </div>
                  Можно ли вернуть деньги?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 pl-14 text-base leading-relaxed">
                Да, мы предлагаем 14-дневную гарантию возврата денег. Если курс вам не подошел, вы можете вернуть 100% стоимости в течение первых двух недель обучения без объяснения причин.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Начните обучение сегодня
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Получите доступ ко всем курсам и начните развивать свои навыки с первого дня
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 text-lg px-8 py-6">
            Зарегистрироваться бесплатно
            <Icon name="Sparkles" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">EduPlatform</h3>
              <p className="text-gray-400">Онлайн-образование нового поколения</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Курсы</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Веб-разработка</li>
                <li className="hover:text-white cursor-pointer transition-colors">Дизайн</li>
                <li className="hover:text-white cursor-pointer transition-colors">Маркетинг</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">О нас</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Преподаватели</li>
                <li className="hover:text-white cursor-pointer transition-colors">Отзывы</li>
                <li className="hover:text-white cursor-pointer transition-colors">Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
                <li className="hover:text-white cursor-pointer transition-colors">Помощь</li>
                <li className="hover:text-white cursor-pointer transition-colors">Политика</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduPlatform. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;