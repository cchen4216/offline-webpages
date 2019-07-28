document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-8c6ade0d3779da026346afb9bf324f67.css">')
document.write('<div id=\"gist88900018\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-topic9_plot_process-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-python\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-topic9_plot_process-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-topic9_plot_process-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">def<\/span> <span class=\"pl-en\">plotProcess<\/span>(<span class=\"pl-smi\">n_samples<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">1000<\/span>, <span class=\"pl-smi\">rho<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">0<\/span>):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_plot_process-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-topic9_plot_process-py-LC2\" class=\"blob-code blob-code-inner js-file-line\">    x <span class=\"pl-k\">=<\/span> w <span class=\"pl-k\">=<\/span> np.random.normal(<span class=\"pl-v\">size<\/span><span class=\"pl-k\">=<\/span>n_samples)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_plot_process-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-topic9_plot_process-py-LC3\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">for<\/span> t <span class=\"pl-k\">in<\/span> <span class=\"pl-c1\">range<\/span>(n_samples):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_plot_process-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-topic9_plot_process-py-LC4\" class=\"blob-code blob-code-inner js-file-line\">        x[t] <span class=\"pl-k\">=<\/span> rho <span class=\"pl-k\">*<\/span> x[t<span class=\"pl-k\">-<\/span><span class=\"pl-c1\">1<\/span>] <span class=\"pl-k\">+<\/span> w[t]<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_plot_process-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-topic9_plot_process-py-LC5\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_plot_process-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-topic9_plot_process-py-LC6\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">with<\/span> plt.style.context(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>bmh<span class=\"pl-pds\">&#39;<\/span><\/span>):  <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_plot_process-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-topic9_plot_process-py-LC7\" class=\"blob-code blob-code-inner js-file-line\">        plt.figure(<span class=\"pl-v\">figsize<\/span><span class=\"pl-k\">=<\/span>(<span class=\"pl-c1\">10<\/span>, <span class=\"pl-c1\">3<\/span>))<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_plot_process-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-topic9_plot_process-py-LC8\" class=\"blob-code blob-code-inner js-file-line\">        plt.plot(x)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_plot_process-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-topic9_plot_process-py-LC9\" class=\"blob-code blob-code-inner js-file-line\">        plt.title(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>Rho <span class=\"pl-c1\">{}<\/span><span class=\"pl-cce\">\\n<\/span> Dickey-Fuller p-value: <span class=\"pl-c1\">{}<\/span><span class=\"pl-pds\">&quot;<\/span><\/span>.format(rho, <span class=\"pl-c1\">round<\/span>(sm.tsa.stattools.adfuller(x)[<span class=\"pl-c1\">1<\/span>], <span class=\"pl-c1\">3<\/span>)))<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_plot_process-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-topic9_plot_process-py-LC10\" class=\"blob-code blob-code-inner js-file-line\">        <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_plot_process-py-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-topic9_plot_process-py-LC11\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">for<\/span> rho <span class=\"pl-k\">in<\/span> [<span class=\"pl-c1\">0<\/span>, <span class=\"pl-c1\">0.6<\/span>, <span class=\"pl-c1\">0.9<\/span>, <span class=\"pl-c1\">1<\/span>]:<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_plot_process-py-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-topic9_plot_process-py-LC12\" class=\"blob-code blob-code-inner js-file-line\">    plotProcess(<span class=\"pl-v\">rho<\/span><span class=\"pl-k\">=<\/span>rho)<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/DmitrySerg/5912f3f30aa374c32b986fdd588fb5e2/raw/b5a719565d90fbfffdd18acf04a0651f4ed26845/topic9_plot_process.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/DmitrySerg/5912f3f30aa374c32b986fdd588fb5e2#file-topic9_plot_process-py\">topic9_plot_process.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')