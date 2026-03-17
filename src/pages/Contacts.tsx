import { useState } from 'react';
import Icon from '@/components/ui/icon';

const contacts = [
  { icon: 'Phone',  title: 'Телефон', value: '+7 (000) 000-00-00', sub: 'Пн–Пт: 9:00 – 18:00' },
  { icon: 'Mail',   title: 'Email',   value: 'info@strojdom.ru',   sub: 'Ответим в течение 24 часов' },
  { icon: 'MapPin', title: 'Адрес',   value: 'г. Москва',          sub: 'и Московская область' },
];

export default function Contacts() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-[66px] min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-blue" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(var(--brand-line) 1px, transparent 1px), linear-gradient(90deg, var(--brand-line) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            opacity: 0.4,
          }}
        />
        <div className="relative container mx-auto px-6">
          <div className="section-label"><span>Мы на связи</span></div>
          <h1 className="font-display text-5xl md:text-6xl font-semibold mb-3" style={{ color: 'var(--brand-dark)' }}>
            КОНТАКТЫ
          </h1>
          <p className="font-body text-sm max-w-md" style={{ color: 'var(--brand-gray)' }}>
            Свяжитесь с нами удобным способом — ответим быстро и по делу.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <div className="space-y-px bg-[var(--brand-line)] mb-10">
                {contacts.map((c, i) => (
                  <div key={i} className="bg-white flex items-start gap-5 p-7">
                    <div className="w-10 h-10 bg-brand-blue flex items-center justify-center flex-shrink-0">
                      <Icon name={c.icon} size={18} className="text-white" fallback="Info" />
                    </div>
                    <div>
                      <p className="text-xs font-body uppercase tracking-widest mb-1" style={{ color: 'var(--brand-gray)' }}>{c.title}</p>
                      <p className="font-display text-xl font-medium" style={{ color: 'var(--brand-dark)' }}>{c.value}</p>
                      <p className="text-sm font-body mt-0.5" style={{ color: 'var(--brand-gray)' }}>{c.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-8" style={{ borderColor: 'var(--brand-line)' }}>
                <h3 className="font-display text-base tracking-widest uppercase mb-5" style={{ color: 'var(--brand-dark)' }}>
                  Режим работы
                </h3>
                <div className="space-y-3 font-body text-sm" style={{ color: 'var(--brand-gray)' }}>
                  {[
                    { day: 'Понедельник – Пятница', hours: '9:00 – 18:00', accent: false },
                    { day: 'Суббота',               hours: '10:00 – 15:00', accent: false },
                    { day: 'Воскресенье',            hours: 'Выходной',      accent: true  },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b" style={{ borderColor: 'var(--brand-line)' }}>
                      <span>{row.day}</span>
                      <span
                        className="font-display text-sm tracking-wide"
                        style={{ color: row.accent ? 'var(--brand-blue)' : 'var(--brand-dark)' }}
                      >
                        {row.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-brand-gray-light p-10">
              <div className="section-label mb-8"><span>Написать нам</span></div>

              {sent ? (
                <div className="text-center py-16">
                  <div className="w-14 h-14 bg-brand-blue flex items-center justify-center mx-auto mb-6">
                    <Icon name="Check" size={26} className="text-white" />
                  </div>
                  <h3 className="font-display text-2xl mb-2" style={{ color: 'var(--brand-dark)' }}>
                    ЗАЯВКА ОТПРАВЛЕНА
                  </h3>
                  <p className="font-body text-sm" style={{ color: 'var(--brand-gray)' }}>
                    Свяжемся с вами в течение часа в рабочее время.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="btn-blue-outline mt-8"
                  >
                    Отправить ещё
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { key: 'name',    label: 'Ваше имя',  placeholder: 'Иван Иванов',        type: 'text' },
                    { key: 'phone',   label: 'Телефон',   placeholder: '+7 (000) 000-00-00', type: 'tel'  },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-xs font-display tracking-widest uppercase mb-2" style={{ color: 'var(--brand-gray)' }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required
                        value={form[field.key as 'name' | 'phone']}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        placeholder={field.placeholder}
                        className="w-full border bg-white px-4 py-3 text-sm font-body focus:outline-none focus:border-brand-blue transition-colors"
                        style={{ borderColor: 'var(--brand-line)', color: 'var(--brand-dark)' }}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-display tracking-widest uppercase mb-2" style={{ color: 'var(--brand-gray)' }}>
                      Сообщение
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Опишите ваш проект или вопрос..."
                      rows={4}
                      className="w-full border bg-white px-4 py-3 text-sm font-body focus:outline-none focus:border-brand-blue transition-colors resize-none"
                      style={{ borderColor: 'var(--brand-line)', color: 'var(--brand-dark)' }}
                    />
                  </div>
                  <button type="submit" className="btn-blue w-full justify-center">
                    Отправить заявку
                    <Icon name="Send" size={15} />
                  </button>
                  <p className="text-xs font-body text-center" style={{ color: 'var(--brand-gray)' }}>
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
