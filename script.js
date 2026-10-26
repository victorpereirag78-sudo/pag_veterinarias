// ARM Veterinaria + Mi Mascota — landing

document.documentElement.classList.remove('no-js');

const WHATSAPP = '56934039462';

// ---- Siempre partir arriba ----
// En móviles el navegador restaura el scroll de la visita anterior y la
// página parece abrirse a mitad de camino.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
if (!location.hash) window.scrollTo(0, 0);

// ---- Iconos lineales (24×24, trazo) ----
const ICONOS = {
  tijera: '<circle cx="6" cy="6" r="2.6"/><circle cx="6" cy="18" r="2.6"/><path d="M8.2 7.5L20 18M8.2 16.5L20 6" stroke-linecap="round"/>',
  inicio: '<path d="M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z" stroke-linejoin="round"/>',
  agenda: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 9h16M8 3v4M16 3v4" stroke-linecap="round"/>',
  calendario: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 9h16M8 3v4M16 3v4" stroke-linecap="round"/><path d="M9 14l2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/>',
  paciente: '<ellipse cx="7" cy="9" rx="1.8" ry="2.3"/><ellipse cx="17" cy="9" rx="1.8" ry="2.3"/><ellipse cx="10" cy="5.5" rx="1.7" ry="2.2"/><ellipse cx="14" cy="5.5" rx="1.7" ry="2.2"/><path d="M12 11.5c-3 0-5.5 3-5.5 5.3 0 1.7 1.3 2.6 2.8 2.6 1.2 0 1.8-.6 2.7-.6s1.5.6 2.7.6c1.5 0 2.8-.9 2.8-2.6 0-2.3-2.5-5.3-5.5-5.3z" stroke-linejoin="round"/>',
  hospital: '<path d="M3 20V8l9-4 9 4v12" stroke-linejoin="round"/><path d="M3 20h18M12 9v6M9 12h6" stroke-linecap="round"/>',
  caja: '<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18" /><circle cx="12" cy="14.5" r="2"/>',
  grafico: '<path d="M4 20V11M10 20V5M16 20v-6M3 20h18" stroke-linecap="round"/><path d="M20 8l-3-3" stroke-linecap="round"/>',
  ficha: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 3v2h6V3M9 10h6M12 7v6M9 16h6" stroke-linecap="round"/>',
  whatsapp: '<path d="M4 20l1.3-3.9A8 8 0 1 1 8 18.8z" stroke-linejoin="round"/><path d="M9.5 9.2c0 2.8 2.5 5.3 5.3 5.3l1-1.2-1.6-1-1 .6a3.6 3.6 0 0 1-2.1-2.1l.6-1-1-1.6z" stroke-linejoin="round"/>',
  sucursal: '<path d="M3 21V10l5-3 5 3v11M13 21V6l4-3 4 3v15M3 21h18" stroke-linejoin="round"/><path d="M6.5 14h3M6.5 17.5h3M16 10h2M16 14h2" stroke-linecap="round"/>',
  ia: '<path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z" stroke-linejoin="round"/><path d="M18.5 15l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" stroke-linejoin="round"/>',
  boleta: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" stroke-linejoin="round"/><path d="M9 8h6M9 12h6M9 15h3" stroke-linecap="round"/>',
  papel: '<path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z" stroke-linejoin="round"/><path d="M14 3v5h5M9 13l6 4M15 13l-6 4" stroke-linecap="round" stroke-linejoin="round"/>',
  olvido: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5M5 3L2 6M19 3l3 3" stroke-linecap="round" stroke-linejoin="round"/>',
  chat: '<path d="M4 4h16v12H9l-5 4z" stroke-linejoin="round"/><path d="M8 9h8M8 12h5" stroke-linecap="round"/>',
  estetoscopio: '<path d="M6 3v6a4 4 0 0 0 8 0V3" stroke-linecap="round"/><path d="M10 13v2a5 5 0 0 0 10 0v-2" stroke-linecap="round"/><circle cx="20" cy="11" r="2"/>',
  escudo: '<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/>',
  campana: '<path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z" stroke-linejoin="round"/><path d="M10 20a2 2 0 0 0 4 0" stroke-linecap="round"/>',
  presupuesto: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h4" stroke-linecap="round"/><path d="M15 16.5l1.3 1.3 2.4-2.6" stroke-linecap="round" stroke-linejoin="round"/>',
  firma: '<path d="M3 17c2-2 3.5-6 5.5-6s.5 5 2.5 5 2-3 3.5-3 1.5 2 3 2 2-1 3.5-1" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 21h18" stroke-linecap="round"/>',
  corazon: '<path d="M12 20s-7.5-4.6-9.2-9.3C1.6 7.3 3.8 4.5 7 4.5c2 0 3.6 1.1 5 2.8 1.4-1.7 3-2.8 5-2.8 3.2 0 5.4 2.8 4.2 6.2C19.5 15.4 12 20 12 20z" stroke-linejoin="round"/><path d="M7 11h3l1.2-2 1.6 4 1.2-2H17" stroke-linecap="round" stroke-linejoin="round"/>',
  libro: '<path d="M4 5a2 2 0 0 1 2-2h13v15H6a2 2 0 0 0-2 2z" stroke-linejoin="round"/><path d="M4 20a2 2 0 0 0 2 1h13v-3" stroke-linejoin="round"/><path d="M9 8h6" stroke-linecap="round"/>',
  qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M21 14v.01M14 21h3M20 18v3" stroke-linecap="round"/>',
  alerta: '<path d="M12 21s-6-5.4-6-10.5A6 6 0 0 1 18 10.5C18 15.6 12 21 12 21z" stroke-linejoin="round"/><path d="M12 7v4M12 13.5v.01" stroke-linecap="round"/>',
  pasaporte: '<rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M9 16h6" stroke-linecap="round"/>',
  sos: '<circle cx="12" cy="12" r="9"/><path d="M12 7v10M7 12h10" stroke-linecap="round"/>',
  familia: '<circle cx="8" cy="7" r="2.6"/><circle cx="16" cy="7" r="2.6"/><path d="M3 19c0-3 2.2-5.5 5-5.5s5 2.5 5 5.5M13 15.2c.8-1 1.8-1.7 3-1.7 2.8 0 5 2.5 5 5.5" stroke-linecap="round"/>',
  ojo: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" stroke-linejoin="round"/><circle cx="12" cy="12" r="3"/>',
  historial: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 3v5h5M12 7v5l3 2" stroke-linecap="round" stroke-linejoin="round"/>',
  perfil: '<circle cx="12" cy="8" r="3.6"/><path d="M5 20c.8-3.6 3.6-5.5 7-5.5s6.2 1.9 7 5.5" stroke-linecap="round"/>',
  ruta: '<path d="M12 21s-6.5-5.6-6.5-10.8a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21z" stroke-linejoin="round"/><circle cx="12" cy="10.2" r="2.3"/>',
  nube: '<path d="M7 18a5 5 0 0 1-.5-9.97A6 6 0 0 1 18 8a4.5 4.5 0 0 1-.5 10z" stroke-linejoin="round"/><path d="M9.5 13l2 2 3.5-3.5" stroke-linecap="round" stroke-linejoin="round"/>',
};

document.querySelectorAll('[data-icon]').forEach((el) => {
  const trazo = ICONOS[el.dataset.icon];
  if (!trazo) return;
  el.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">${trazo}</svg>`;
});

// ---- Año del footer ----
const anio = document.getElementById('anio');
if (anio) anio.textContent = new Date().getFullYear();

// ---- Header con sombra al hacer scroll ----
const header = document.getElementById('header');
const marcarHeader = () => header.classList.toggle('scrolled', window.scrollY > 8);
marcarHeader();
window.addEventListener('scroll', marcarHeader, { passive: true });

// ---- Menú móvil ----
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const cerrarMenu = () => {
  mobileNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menú');
};
menuToggle.addEventListener('click', () => {
  const abierto = mobileNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(abierto));
  menuToggle.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
});
mobileNav.querySelectorAll('a, button').forEach((el) => el.addEventListener('click', cerrarMenu));

// ---- Pestañas de módulos (con teclado: flechas, Inicio, Fin) ----
const tabs = Array.from(document.querySelectorAll('#modTabs [role="tab"]'));
const activarTab = (tab, enfocar) => {
  tabs.forEach((t) => {
    const activa = t === tab;
    t.setAttribute('aria-selected', String(activa));
    t.tabIndex = activa ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')).hidden = !activa;
  });
  if (enfocar) tab.focus();
  tab.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
};
tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => activarTab(tab, false));
  tab.addEventListener('keydown', (e) => {
    const destino = {
      ArrowRight: tabs[(i + 1) % tabs.length],
      ArrowLeft: tabs[(i - 1 + tabs.length) % tabs.length],
      Home: tabs[0],
      End: tabs[tabs.length - 1],
    }[e.key];
    if (destino) { e.preventDefault(); activarTab(destino, true); }
  });
});

// ---- Barras del gráfico: entrada escalonada ----
document.querySelectorAll('.kpi-chart span').forEach((barra, i) => barra.style.setProperty('--i', i));

// ---- Animación de entrada al hacer scroll ----
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      entrada.target.classList.add('visible');
      observador.unobserve(entrada.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach((el) => observador.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('visible'));
}

// ---- Modal "Pedir demo" → WhatsApp ----
const overlay = document.getElementById('demoOverlay');
const form = document.getElementById('demoForm');
const selectPlan = document.getElementById('demoPlan');
const errorForm = document.getElementById('demoError');
let ultimoFoco = null;

const abrirDemo = (plan) => {
  ultimoFoco = document.activeElement;
  if (plan) selectPlan.value = plan;
  overlay.hidden = false;
  document.body.style.overflow = 'hidden';
  form.querySelector('input').focus();
};
const cerrarDemo = () => {
  overlay.hidden = true;
  document.body.style.overflow = '';
  errorForm.hidden = true;
  if (ultimoFoco) ultimoFoco.focus();
};

document.querySelectorAll('.js-open-demo').forEach((btn) => {
  btn.addEventListener('click', (e) => { e.preventDefault(); abrirDemo(btn.dataset.plan); });
});
document.getElementById('demoCerrar').addEventListener('click', cerrarDemo);
overlay.addEventListener('click', (e) => { if (e.target === overlay) cerrarDemo(); });
document.addEventListener('keydown', (e) => {
  if (overlay.hidden) return;
  if (e.key === 'Escape') cerrarDemo();
  // Mantener el foco dentro del modal
  if (e.key === 'Tab') {
    const focos = overlay.querySelectorAll('button, input, select');
    const primero = focos[0];
    const ultimo = focos[focos.length - 1];
    if (e.shiftKey && document.activeElement === primero) { e.preventDefault(); ultimo.focus(); }
    else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primero.focus(); }
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const datos = new FormData(form);
  const valor = (campo) => String(datos.get(campo) || '').trim();
  const requeridos = ['clinica', 'contacto', 'telefono'];
  let valido = true;
  requeridos.forEach((campo) => {
    const input = form.elements[campo];
    const vacio = !valor(campo);
    input.setAttribute('aria-invalid', String(vacio));
    if (vacio) valido = false;
  });
  errorForm.hidden = valido;
  if (!valido) {
    form.querySelector('[aria-invalid="true"]').focus();
    return;
  }

  const lineas = [
    'Hola, quiero pedir una demo gratis de ARM Veterinaria + Mi Mascota.',
    `Negocio: ${valor('clinica')} (${valor('tipo')})`,
    `Contacto: ${valor('contacto')}`,
    `WhatsApp: ${valor('telefono')}`,
    `Sucursales: ${valor('sucursales')}`,
    `Plan de interés: ${valor('plan')}`,
  ];
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lineas.join('\n'))}`, '_blank', 'noopener');
  form.reset();
  cerrarDemo();
});

// ---- Planes: precios en vivo desde ARM Veterinaria ----
// Se leen de la base (vet_pub_planes, sin sesión) para que un cambio de
// precio en el panel de la plataforma se vea aquí sin publicar la página.
// Si la consulta falla, quedan los precios escritos en el HTML.
const SUPABASE_URL = 'https://rhggndoqjnlzmfxsllto.supabase.co';
// Clave pública (anon) del panel: solo permite lo que las políticas abren a cualquiera.
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoZ2duZG9xam5sem1meHNsbHRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwNDE5MTIsImV4cCI6MjA5MzYxNzkxMn0.sEJIK0dtWsjwf_KUBII_QQYWuoLUvoNTGXxUUEzwhCE';

const clp = (n) => '$' + Math.round(n).toLocaleString('es-CL');
const ufTxt = (n) => n.toLocaleString('es-CL', { minimumFractionDigits: 2, maximumFractionDigits: 4 }) + ' UF';
// Respaldo (los mismos valores del HTML) mientras responde la base o si falla.
let datosPlanes = {
  iva_pct: 19, uf: null,
  planes: [
    { codigo: 'basico', nombre: 'Básico', precio_mensual: 15990, precio_anual: 159900, max_sucursales: 1, max_usuarios: 2 },
    { codigo: 'profesional', nombre: 'Profesional', precio_mensual: 22990, precio_anual: 229900, max_sucursales: 2, max_usuarios: 8 },
    { codigo: 'clinica', nombre: 'Clínica', precio_mensual: 35990, precio_anual: 359900, max_sucursales: null, max_usuarios: null },
    { codigo: 'peluqueria', nombre: 'Peluquería', precio_mensual: 9990, precio_anual: 99900, max_sucursales: 1, max_usuarios: 3 },
    { codigo: 'movil', nombre: 'Veterinario a domicilio', precio_mensual: 14990, precio_anual: 149900, max_sucursales: 1, max_usuarios: 2 },
  ],
};
let periodo = 'mensual';

const pintarPlanes = () => {
  const { planes, iva_pct: iva, uf } = datosPlanes;
  planes.forEach((p) => {
    const card = document.querySelector(`.price-card[data-plan="${p.codigo}"]`);
    if (!card) return;
    const set = (campo, texto) => { const el = card.querySelector(`[data-campo="${campo}"]`); if (el) el.textContent = texto; };
    const neto = periodo === 'anual' ? p.precio_anual : p.precio_mensual;
    const total = neto * (1 + iva / 100);
    set('nombre', p.nombre);
    if (p.descripcion) set('descripcion', p.descripcion);
    set('precio', clp(neto));
    set('unidad', periodo === 'anual' ? 'año' : 'mes');
    set('detalle', `${clp(total)} IVA incluido${uf ? ` · ${ufTxt(neto / uf.valor)} hoy` : ''}`);
    set('sedes', p.max_sucursales == null ? 'Sedes ilimitadas' : p.max_sucursales === 1 ? '1 sede' : `Hasta ${p.max_sucursales} sedes`);
    set('usuarios', p.max_usuarios == null ? 'Usuarios ilimitados (sin límite de equipo)' : `Hasta ${p.max_usuarios} usuarios`);
    if (p.max_storage_mb) {
      const gb = Math.round(p.max_storage_mb / 1024);
      set('almacenamiento', `${gb} GB de almacenamiento en la nube`);
    }
  });
  const ufHoy = document.getElementById('ufHoy');
  if (ufHoy && uf) {
    const [a, m, d] = uf.fecha.split('-');
    ufHoy.textContent = `Valor UF al ${d}-${m}-${a}: $${Number(uf.valor).toLocaleString('es-CL', { minimumFractionDigits: 2 })}.`;
  }
  // "2 meses gratis" solo si el anual realmente lo es (según el primer plan).
  const p0 = planes[0];
  const etiqueta = document.querySelector('.periodo [data-periodo="anual"] em');
  if (p0 && etiqueta) {
    const meses = Math.round(12 - p0.precio_anual / p0.precio_mensual);
    etiqueta.textContent = meses >= 1 ? `Ahorra ${meses} ${meses === 1 ? 'mes' : 'meses'}` : '';
  }
};

// Tipo de negocio: muestra los planes de la clínica, la peluquería o el veterinario a domicilio.
const mostrarPerfil = (perfil) => {
  document.querySelectorAll('.perfil-tabs button').forEach((x) => {
    const activo = x.dataset.perfil === perfil;
    x.classList.toggle('on', activo);
    x.setAttribute('aria-pressed', String(activo));
  });
  document.querySelectorAll('.price-grid[data-perfil]').forEach((g) => { g.hidden = g.dataset.perfil !== perfil; });
};
document.querySelectorAll('.perfil-tabs button').forEach((b) => b.addEventListener('click', () => mostrarPerfil(b.dataset.perfil)));
document.querySelectorAll('[data-ver-planes]').forEach((a) => a.addEventListener('click', () => mostrarPerfil(a.dataset.verPlanes)));

document.querySelectorAll('.periodo button').forEach((b) => {
  b.addEventListener('click', () => {
    periodo = b.dataset.periodo;
    document.querySelectorAll('.periodo button').forEach((x) => {
      x.classList.toggle('on', x === b);
      x.setAttribute('aria-pressed', String(x === b));
    });
    pintarPlanes();
  });
});
pintarPlanes();

fetch(`${SUPABASE_URL}/rest/v1/rpc/vet_pub_planes`, {
  method: 'POST',
  headers: { apikey: SUPABASE_ANON, Authorization: `Bearer ${SUPABASE_ANON}`, 'Content-Type': 'application/json' },
  body: '{}',
})
  .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
  .then((d) => { if (d && Array.isArray(d.planes) && d.planes.length) { datosPlanes = d; pintarPlanes(); } })
  .catch(() => { /* quedan los precios del HTML */ });

// ---- Parallax suave en los mockups del hero (solo escritorio) ----
const panel = document.getElementById('mockPanel');
const telefono = document.getElementById('mockPhone');
const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (panel && telefono && !sinMovimiento && window.matchMedia('(min-width: 921px) and (hover: hover)').matches) {
  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 12;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;
    panel.style.transform = `translate(${x * 0.6}px, ${y * 0.6}px)`;
    telefono.style.transform = `translate(${x * -0.5}px, ${y * -0.5}px)`;
  }, { passive: true });
}
