"""
ZoneTechOnline Design & Content Agent
Agente IA experto en diseño, multimedia y contenido para la tienda de wearables premium.

Uso: python agent.py
Requiere: pip install anthropic
"""

import anthropic
import json

client = anthropic.Anthropic()

SYSTEM_PROMPT = """Eres el agente experto en diseño, multimedia y contenido de ZoneTechOnline,
una tienda premium de wearables tecnológicos europea (Garmin, Oura, Jabra, Sennheiser,
Ray-Ban Meta, Sonos, Marshall, B&O, Bose, CurrentBody, etc.).

Tu especialidad cubre:

**DISEÑO UX/UI:**
- Layouts e-commerce de alto rendimiento (conversion rate optimization)
- Tipografía, paletas de color y espaciado para marca premium
- Microinteracciones y animaciones que generan confianza
- Diseño responsivo mobile-first para España/Europa

**CONTENIDO Y COPYWRITING:**
- Descripciones de producto persuasivas con beneficios reales
- Textos para categorías, banners y hero sections
- Contenido SEO optimizado para España y Europa
- Textos legales UE: RGPD, política de devoluciones, garantías

**MULTIMEDIA:**
- Especificaciones para fotografía de producto (ángulos, iluminación, fondo)
- Recomendaciones para vídeos de producto y tutoriales
- Guías de estilo visual para redes sociales (Instagram, TikTok)
- Optimización de imágenes para web (formatos, tamaños, lazy loading)

**CONFIANZA Y CONVERSIÓN:**
- Badges de confianza europeos (CE, RGPD, garantía oficial, Trustpilot)
- Estrategia de reviews y valoraciones verificadas
- Arquitectura de información para fichas de producto premium
- Mejores prácticas para checkout y reducción de abandono

**ESTRATEGIA DE MARCA:**
- Posicionamiento premium en mercado español/europeo
- Guía de tono de comunicación (profesional pero cercano)
- Estrategia de contenido para cada categoría de producto

Responde siempre en español. Sé específico, práctico y orientado a resultados reales.
Cuando sugieras cambios de diseño, incluye el CSS o HTML exacto cuando sea posible.
Cuando sugiras contenido, redacta ejemplos concretos listos para usar."""

tools = [
    {
        "name": "analizar_producto",
        "description": "Analiza un producto del catálogo y genera contenido mejorado: descripción, specs destacadas, beneficios clave y copy para el botón de compra.",
        "input_schema": {
            "type": "object",
            "properties": {
                "nombre_producto": {"type": "string", "description": "Nombre del producto"},
                "categoria": {"type": "string", "description": "Categoría: relojes, anillos, auriculares, gafas, altavoces, mascaras"},
                "precio": {"type": "number", "description": "Precio en euros"},
                "descripcion_actual": {"type": "string", "description": "Descripción actual del producto"}
            },
            "required": ["nombre_producto", "categoria", "precio"]
        }
    },
    {
        "name": "sugerir_mejora_visual",
        "description": "Sugiere mejoras visuales específicas para una sección de la tienda con CSS/HTML concreto.",
        "input_schema": {
            "type": "object",
            "properties": {
                "seccion": {"type": "string", "description": "Sección a mejorar: hero, productos, carrito, footer, etc."},
                "problema": {"type": "string", "description": "Problema o aspecto a mejorar"}
            },
            "required": ["seccion", "problema"]
        }
    },
    {
        "name": "generar_contenido_seo",
        "description": "Genera contenido SEO optimizado para categorías y páginas de la tienda.",
        "input_schema": {
            "type": "object",
            "properties": {
                "tipo": {"type": "string", "description": "Tipo: categoria, meta_description, titulo_pagina, blog_post"},
                "tema": {"type": "string", "description": "Tema o keyword objetivo"},
                "longitud": {"type": "string", "description": "corto, medio o largo"}
            },
            "required": ["tipo", "tema"]
        }
    }
]

def process_tool_call(tool_name, tool_input):
    """Procesa las llamadas a herramientas del agente."""
    if tool_name == "analizar_producto":
        return {
            "status": "análisis completado",
            "producto": tool_input.get("nombre_producto"),
            "categoria": tool_input.get("categoria"),
            "precio": tool_input.get("precio")
        }
    elif tool_name == "sugerir_mejora_visual":
        return {
            "status": "sugerencia generada",
            "seccion": tool_input.get("seccion"),
            "problema": tool_input.get("problema")
        }
    elif tool_name == "generar_contenido_seo":
        return {
            "status": "contenido generado",
            "tipo": tool_input.get("tipo"),
            "tema": tool_input.get("tema")
        }
    return {"status": "herramienta ejecutada", "input": tool_input}

def chat(messages):
    """Ejecuta el agente con soporte para tool use."""
    response = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=4096,
        system=SYSTEM_PROMPT,
        tools=tools,
        messages=messages
    )

    while response.stop_reason == "tool_use":
        tool_results = []
        assistant_content = response.content

        for block in response.content:
            if block.type == "tool_use":
                result = process_tool_call(block.name, block.input)
                tool_results.append({
                    "type": "tool_result",
                    "tool_use_id": block.id,
                    "content": json.dumps(result, ensure_ascii=False)
                })

        messages.append({"role": "assistant", "content": assistant_content})
        messages.append({"role": "user", "content": tool_results})

        response = client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=4096,
            system=SYSTEM_PROMPT,
            tools=tools,
            messages=messages
        )

    return response

def main():
    print("\n" + "="*60)
    print("  ZoneTechOnline — Agente de Diseño y Contenido")
    print("  Experto en wearables premium · España/Europa")
    print("="*60)
    print("\nPuedes preguntarme sobre:")
    print("  • Mejoras de diseño y UX de la tienda")
    print("  • Contenido y copywriting para productos")
    print("  • Estrategia SEO y posicionamiento")
    print("  • Fotografía y multimedia de productos")
    print("  • Confianza y conversión para clientes europeos")
    print("\nEscribe 'salir' para terminar.\n")

    messages = []

    while True:
        user_input = input("Tú: ").strip()

        if not user_input:
            continue
        if user_input.lower() in ["salir", "exit", "quit"]:
            print("\n¡Hasta pronto! Recuerda: cada mejora que implementes es un paso más hacia la tienda de referencia de wearables en Europa. 🚀")
            break

        messages.append({"role": "user", "content": user_input})

        try:
            response = chat(messages)
            assistant_text = ""
            for block in response.content:
                if hasattr(block, "text"):
                    assistant_text += block.text

            messages.append({"role": "assistant", "content": response.content})
            print(f"\nAgente: {assistant_text}\n")
            print("-" * 60)

        except anthropic.APIConnectionError:
            print("\n[Error] Sin conexión a la API. Verifica tu ANTHROPIC_API_KEY.\n")
        except anthropic.AuthenticationError:
            print("\n[Error] API key inválida. Configura ANTHROPIC_API_KEY en tu entorno.\n")
        except Exception as e:
            print(f"\n[Error] {e}\n")

if __name__ == "__main__":
    main()
