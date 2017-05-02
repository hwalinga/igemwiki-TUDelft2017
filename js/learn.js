(function () {
  $(function () {
    var element =   document.getElementById('diffusion');
    var latex = '\\phi(x,t) = \\phi_{s}\\left[\\frac{\\omega}{L} + \\sum_{k=1}^{\\infty} \\frac{2}{k\\pi}\\sin\\left(\\frac{k\\pi\\omega}{L}\\right)\\cos\\left(\\frac{k\\pi\\omega}{L}\\right)e^{\\ D\\ \\cdot \\ \\left(\\frac{k\\pi}{L}\\right)^2\\cdot \\ t} \\right]';
    katex.render(latex, element);
  });
}());
