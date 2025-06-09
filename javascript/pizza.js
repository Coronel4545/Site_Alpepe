const data = [40, 10, 40, 10]; // Dados do gráfico (percentuais)
const colors = ['#d4af37', '#f4b400', '#34a853', '#4285f4']; // Cores das fatias
const radius = 180; // Raio do gráfico ajustado para o viewBox

const svg = document.getElementById('pieChart');
// Usar o centro do viewBox (400x400)
const centerX = 200;
const centerY = 200;

let cumulativePercent = 0;

data.forEach((percent, index) => {
    const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
    cumulativePercent += percent / 100;
    const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

    const largeArcFlag = percent > 50 ? 1 : 0;

    // Desenha a fatia do gráfico
    const pathData = [
        `M ${centerX} ${centerY}`, // Move para o centro
        `L ${centerX + startX * radius} ${centerY + startY * radius}`, // Linha até o início do arco
        `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${centerX + endX * radius} ${centerY + endY * radius}`, // Arco
        'Z', // Fecha o caminho
    ].join(' ');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathData);
    path.setAttribute('fill', colors[index]);
    svg.appendChild(path);

    // Calcula a posição do texto (percentual)
    const [textX, textY] = getCoordinatesForPercent(cumulativePercent - percent / 200);
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', centerX + textX * radius * 0.6); // Ajusta a posição para o centro da fatia
    text.setAttribute('y', centerY + textY * radius * 0.6);
    text.setAttribute('fill', '#fff'); // Cor do texto
    text.setAttribute('font-size', '20'); // Aumentar um pouco o tamanho da fonte do texto
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('dominant-baseline', 'middle');
    text.textContent = `${percent}%`;
    svg.appendChild(text);
});

function getCoordinatesForPercent(percent) {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
}