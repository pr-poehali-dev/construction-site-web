import { useState } from 'react';
import Icon from '@/components/ui/icon';

const contacts = [
  {
    icon: 'Phone',
    title: 'Телефон',
    value: '+7 (000) 000-00-00',
    sub: 'Пн–Пт: 9:00 – 18:00',
  },
  {
    icon: 'Mail',
    title: 'Email',
    value: 'info@strojdom.ru',
    sub: 'Ответим в течение 24 часов',
  },
  {
    icon: 'MapPin',
    title: 'Адрес',
    value: 'г. Москва',
    sub: 'и Московская область',
  },
];

export default function Contacts() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-brand-dark py-20 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red" />
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-5">
          <div className="w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        </div>
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-brand-red" />
            <span className="text-brand-red font-display text-xs tracking-widest uppercase">Мы на связи</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-white mb-4">КОНТАКТЫ</h1>
          <p className="font-body text-white/50 max-w-xl text-base">
            Свяжитесь с нами удобным способом — ответим быстро и по делу.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-10 bg-brand-red" />
                <span className="text-brand-red font-display text-xs tracking-widest uppercase">Наши контакты</span>
              </div>

              <div className="space-y-6 mb-12">
                {contacts.map((c, i) => (
                  <div key={i} className="flex items-start gap-5 p-6 border border-gray-100 hover:border-brand-blue transition-colors duration-200">
                    <div className="w-12 h-12 bg-brand-blue flex items-center justify-center flex-shrink-0">
                      <Icon name={c.icon} size={20} className="text-white" fallback="Info" />
                    </div>
                    <div>
                      <p className="text-xs font-body text-brand-gray uppercase tracking-wide mb-1">{c.title}</p>
                      <p className="font-display text-xl text-brand-dark font-medium">{c.value}</p>
                      <p className="text-sm font-body text-brand-gray mt-0.5">{c.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social / extra */}
              <div className="border-t border-gray-100 pt-8">
                <h3 className="font-display text-lg text-brand-dark mb-4">РЕЖИМ РАБОТЫ</h3>
                <div className="space-y-2 font-body text-sm text-brand-gray">
                  <div className="flex justify-between">
                    <span>Понедельник – Пятница</span>
                    <span className="text-brand-dark font-medium">9:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Суббота</span>
                    <span className="text-brand-dark font-medium">10:00 – 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Воскресенье</span>
                    <span className="text-brand-red font-medium">Выходной</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-brand-gray-light p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-10 bg-brand-red" />
                <span className="text-brand-red font-display text-xs tracking-widest uppercase">Написать нам</span>
              </div>

              {sent ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-brand-blue flex items-center justify-center mx-auto mb-6">
                    <Icon name="CheckCheck" size={30} className="text-white" />
                  </div>
                  <h3 className="font-display text-2xl text-brand-dark mb-3">ЗАЯВКА ОТПРАВЛЕНА</h3>
                  <p className="font-body text-brand-gray">Мы свяжемся с вами в течение часа в рабочее время.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-8 border-2 border-brand-blue text-brand-blue font-display tracking-widest uppercase px-6 py-2.5 text-sm hover:bg-brand-blue hover:text-white transition-all duration-300"
                  >
                    Отправить ещё
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-display tracking-widest uppercase text-brand-gray mb-2">Ваше имя</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Иван Иванов"
                      className="w-full border border-gray-200 bg-white px-4 py-3.5 text-sm font-body text-brand-dark placeholder:text-gray-400 focus:outline-none focus:border-brand-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-display tracking-widest uppercase text-brand-gray mb-2">Телефон</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+7 (000) 000-00-00"
                      className="w-full border border-gray-200 bg-white px-4 py-3.5 text-sm font-body text-brand-dark placeholder:text-gray-400 focus:outline-none focus:border-brand-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-display tracking-widest uppercase text-brand-gray mb-2">Сообщение</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Опишите ваш проект или вопрос..."
                      rows={4}
                      className="w-full border border-gray-200 bg-white px-4 py-3.5 text-sm font-body text-brand-dark placeholder:text-gray-400 focus:outline-none focus:border-brand-blue transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brand-blue text-white font-display tracking-widest uppercase py-4 text-sm hover:bg-brand-red transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    Отправить заявку
                    <Icon name="Send" size={16} />
                  </button>
                  <p className="text-xs font-body text-brand-gray text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
