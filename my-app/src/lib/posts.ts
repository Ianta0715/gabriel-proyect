export interface Post {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: 'habilidades' | 'entrenador' | 'general'
  author: string
  date: string
  readTime: string
  featured: boolean
  tags: string[]
}

export const posts: Post[] = [
  {
    id: '1',
    slug: 'el-pase-esta-sobrevalorado',
    title: 'EL PASE ESTÁ SOBREVALORADO',
    excerpt: '¿El pase está sobrevalorado? En el hockey moderno se repite como mantra: "pasá la bocha". Pero, ¿realmente es la solución a todos nuestros problemas tácticos?',
    content: `
# EL PASE ESTÁ SOBREVALORADO

¿El pase está sobrevalorado? En el hockey moderno se repite como mantra: "pasá la bocha". Es una frase que escuchamos constantemente en canchas de todo el mundo. Entrenadores que gritan desde el lateral, jugadores que se frustran cuando un compañero no entrega la pelota, análisis tácticos que se centran en la circulación del balón.

Pero me pregunto: ¿realmente es la solución a todos nuestros problemas tácticos?

## El mito de la circulación perfecta

Durante años hemos construido un ideal alrededor del pase. La idea de que mover la pelota rápidamente es sinónimo de buen hockey. Y en parte, es cierto. El pase es fundamental. Pero cuando se convierte en una obsesión, perdemos de vista otras herramientas igual de valiosas.

He visto equipos que pasan perfectamente pero que no generan situaciones de peligro. Jugadores que tienen un control exquisito pero que no saben cuándo es momento de arriesgar. Equipos que circulan la pelota de manera impecable pero que se diluyen en su propia perfección técnica.

## El valor de la pausa

¿Qué pasa con el jugador que recibe la pelota y no la entrega inmediatamente? ¿El que se toma un segundo para levantar la cabeza, analizar las opciones, incluso provocar el movimiento del rival?

En nuestra obsesión por el pase rápido, a veces eliminamos la pausa. Esa fracción de segundo que puede cambiar completamente el desarrollo de una jugada. El jugador que se anima a quedarse con la pelota, a generar una superioridad numérica, a obligar al rival a definirse.

## La decisión por encima de la técnica

El pase es una herramienta. Como cualquier herramienta, su valor depende de cuándo y cómo la usamos. Un pase técnicamente perfecto en el momento equivocado puede ser más dañino que beneficial. Un pase menos preciso pero en el timing correcto puede abrir una defensa.

¿Estamos enseñando a nuestros jugadores a tomar decisiones o simplemente a ejecutar un gesto técnico?

## Conclusión

No se trata de desvalorizar el pase. Se trata de entenderlo como parte de un conjunto más amplio de herramientas. De enseñar a nuestros jugadores que hay momentos para pasar y momentos para no pasar. Que la inteligencia táctica está en saber cuándo aplicar cada herramienta.

El hockey es un deporte de decisiones constantes. Y la mejor decisión no siempre es pasar la pelota.

*¿Qué opinás? ¿Creés que el pase está sobrevalorado en el hockey moderno?*
    `,
    category: 'habilidades',
    author: 'Gabriel Herrera',
    date: '2025-01-15',
    readTime: '5 min',
    featured: true,
    tags: ['pase', 'táctica', 'decisión', 'técnica']
  },
  {
    id: '2',
    slug: 'no-es-casualidad-que-estes-ahi',
    title: 'NO ES CASUALIDAD QUE ESTÉS AHÍ',
    excerpt: 'El síndrome del impostor. Hay momentos en los que te encontrás en una reunión rodeado de colegas experimentados y pensás: "¿Qué hago yo acá?" No sos el único.',
    content: `
# NO ES CASUALIDAD QUE ESTÉS AHÍ

## El síndrome del impostor

Hay momentos en los que te encontrás en una reunión rodeado de colegas experimentados y pensás: "¿Qué hago yo acá?" Escuchás hablar a entrenadores con décadas de experiencia, con títulos, con historias que parecen sacadas de un manual, y una vocecita interna te susurra: "No pertenecés a este lugar."

No sos el único. Es más común de lo que imaginás.

## La experiencia no es solo tiempo

Durante años creí que la experiencia se medía en campeonatos ganados o años en la cancha. Y aunque eso cuenta, hay algo más profundo. La experiencia también es la capacidad de hacer las preguntas correctas, de observar lo que otros no ven, de aportar una perspectiva fresca a problemas antiguos.

Tu llegada a ese lugar no fue casualidad. Alguien vio algo en vos. Alguien confió en tu criterio, en tu forma de ver el hockey, en tu potencial para aportar valor.

## El valor de la perspectiva nueva

He aprendido más de entrenadores jóvenes que de muchos veteranos. No porque los veteranos no sepan, sino porque los jóvenes hacen preguntas que nosotros ya no nos hacemos. Cuestionan métodos que damos por sentado. Traen energía, ideas nuevas, formas diferentes de abordar problemas conocidos.

Tu "falta de experiencia" puede ser, en realidad, tu mayor fortaleza.

## La confianza se construye

La confianza no aparece de la nada. Se construye paso a paso, decisión tras decisión, error tras error. Cada vez que te animás a hablar en esa reunión, cada vez que compartís una idea, cada vez que asumís una responsabilidad, estás construyendo esa confianza.

No esperés a sentirte completamente preparado para actuar. Nadie se siente completamente preparado nunca.

## Tu lugar está ganado

Si estás ahí, es porque alguien cree en vos. Pero más importante: es porque vos te ganaste ese lugar. Tal vez no con títulos o años de experiencia, pero sí con trabajo, dedicación, pasión por aprender y crecer.

No es casualidad que estés ahí. Es consecuencia.

## Conclusión

El síndrome del impostor es real, pero también es una oportunidad. Una oportunidad para demostrar que merecés estar ahí. Una oportunidad para aportar tu perspectiva única. Una oportunidad para crecer y ayudar a otros a crecer.

La próxima vez que esa vocecita interna te diga que no pertenecés, recordá: estás ahí por algo. Ahora te toca demostrar por qué.

*¿Alguna vez sentiste que no pertenecías a un lugar donde estabas? ¿Cómo lo superaste?*
    `,
    category: 'entrenador',
    author: 'Gabriel Herrera',
    date: '2025-01-10',
    readTime: '4 min',
    featured: false,
    tags: ['confianza', 'desarrollo', 'crecimiento', 'liderazgo']
  },
  {
    id: '3',
    slug: 'la-importancia-del-contexto',
    title: 'LA IMPORTANCIA DEL CONTEXTO',
    excerpt: 'No existe la técnica perfecta. Existe la técnica adecuada para cada contexto. Entender esto cambia completamente nuestra forma de enseñar hockey.',
    content: `
# LA IMPORTANCIA DEL CONTEXTO

## Más allá de la técnica perfecta

Durante años buscamos la técnica perfecta. El pase perfecto, el control perfecto, el tiro perfecto. Pero la realidad del hockey es más compleja. No existe la técnica perfecta en abstracto. Existe la técnica adecuada para cada situación, para cada contexto.

Un control que es perfecto en una situación de tiempo y espacio puede ser completamente inadecuado cuando hay presión del rival. Un pase que funciona contra una defensa posicional puede fallar contra una defensa agresiva.

## El hockey es contexto

Cada acción en el hockey sucede dentro de un contexto específico:
- ¿Hay presión del rival?
- ¿Cuánto tiempo y espacio tengo?
- ¿Cuál es el resultado del partido?
- ¿En qué momento del juego estamos?
- ¿Cuáles son las características de mis compañeros?

Estas variables cambian constantemente y requieren adaptaciones constantes en nuestra técnica.

## Enseñar con contexto

Como entrenadores, nuestro desafío es enseñar técnica dentro de contextos reales. No se trata de eliminar los ejercicios analíticos, sino de asegurar que siempre haya una progresión hacia situaciones más complejas y realistas.

¿Cómo cambia un control cuando hay un defensor a mis espaldas? ¿Cómo modifico mi pase cuando el receptor está siendo presionado? ¿Qué opciones tengo cuando mi primera opción no está disponible?

## La inteligencia táctica

El contexto desarrolla inteligencia táctica. Los jugadores aprenden a leer situaciones, a anticipar, a tomar decisiones más rápidas y eficaces. Aprenden que la técnica es un medio, no un fin.

## Conclusión

El hockey en contexto es hockey real. Es entender que cada situación es única y requiere una respuesta específica. Es formar jugadores inteligentes, no solo técnicos.

Porque al final, en la cancha no hay situaciones perfectas. Solo hay contextos que resolver.
    `,
    category: 'general',
    author: 'Gabriel Herrera',
    date: '2025-01-05',
    readTime: '3 min',
    featured: false,
    tags: ['contexto', 'técnica', 'táctica', 'enseñanza']
  }
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug)
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter(post => post.category === category)
}

export function getFeaturedPosts(): Post[] {
  return posts.filter(post => post.featured)
}

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
