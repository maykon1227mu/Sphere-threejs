# 🌎 Three.js: Modelo 3D Interativo da Terra

Projeto avançado desenvolvido com Three.js para renderizar um modelo 3D detalhado do planeta Terra, composto por múltiplas malhas (meshes) e texturas que simulam a complexidade visual do planeta real.

## 🌟 Destaques Técnicos

O projeto demonstra o uso de conceitos essenciais para renderização realista em 3D:

* **Composição por Camadas:** Utiliza um `THREE.Group` para gerenciar meshes separadas para a **Terra** (mapa principal), **Nuvens** (transparente), **Luzes Urbanas** (efeito de brilho noturno).
* **Interatividade:** Implementação de `OrbitControls` para rotação, zoom e pan com o mouse.
* **Física Realista:** A Terra é inclinada em **23.4°** (`rotation.z`) para simular o eixo de rotação real.
* **Efeito Atmosférico:** Criação de um efeito de brilho atmosférico (glow) utilizando o **Material Fresnel** (geralmente via custom shaders).
* **Iluminação:** Uso de `DirectionalLight` (simulando o Sol) e adição de um campo estelar (`getStarfield`).
* **Animação Independente:** Cada camada (Terra, Nuvens, Luzes) gira em velocidades ligeiramente diferentes para aumentar o realismo.

## 🛠️ Tecnologias

* **Three.js** (v0.161.0)
* **JavaScript** (ES Modules)
* **Import Maps** (para gerenciamento de dependências)

## 🚀 Como Executar

Basta abrir o arquivo `index.html` em um navegador moderno.
