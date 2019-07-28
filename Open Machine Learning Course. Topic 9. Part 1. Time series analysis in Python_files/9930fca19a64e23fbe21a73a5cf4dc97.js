document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-8c6ade0d3779da026346afb9bf324f67.css">')
document.write('<div id=\"gist88900232\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-topic9_optimize_sarima-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-python\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">def<\/span> <span class=\"pl-en\">optimizeSARIMA<\/span>(<span class=\"pl-smi\">parameters_list<\/span>, <span class=\"pl-smi\">d<\/span>, <span class=\"pl-smi\">D<\/span>, <span class=\"pl-smi\">s<\/span>):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC2\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-s\"><span class=\"pl-pds\">&quot;&quot;&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">        Return dataframe with parameters and corresponding AIC<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC4\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">        <\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC5\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">        parameters_list - list with (p, q, P, Q) tuples<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC6\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">        d - integration order in ARIMA model<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC7\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">        D - seasonal integration order <\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC8\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">        s - length of season<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC9\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\">    <span class=\"pl-pds\">&quot;&quot;&quot;<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC10\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC11\" class=\"blob-code blob-code-inner js-file-line\">    results <span class=\"pl-k\">=<\/span> []<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC12\" class=\"blob-code blob-code-inner js-file-line\">    best_aic <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">float<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>inf<span class=\"pl-pds\">&quot;<\/span><\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC13\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC14\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">for<\/span> param <span class=\"pl-k\">in<\/span> tqdm_notebook(parameters_list):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC15\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> we need try-except because on some combinations model fails to converge<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC16\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-k\">try<\/span>:<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC17\" class=\"blob-code blob-code-inner js-file-line\">            model<span class=\"pl-k\">=<\/span>sm.tsa.statespace.SARIMAX(ads.Ads, <span class=\"pl-v\">order<\/span><span class=\"pl-k\">=<\/span>(param[<span class=\"pl-c1\">0<\/span>], d, param[<span class=\"pl-c1\">1<\/span>]), <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC18\" class=\"blob-code blob-code-inner js-file-line\">                                            <span class=\"pl-v\">seasonal_order<\/span><span class=\"pl-k\">=<\/span>(param[<span class=\"pl-c1\">3<\/span>], D, param[<span class=\"pl-c1\">3<\/span>], s)).fit(<span class=\"pl-v\">disp<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-k\">-<\/span><span class=\"pl-c1\">1<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC19\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-k\">except<\/span>:<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC20\" class=\"blob-code blob-code-inner js-file-line\">            <span class=\"pl-k\">continue<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC21\" class=\"blob-code blob-code-inner js-file-line\">        aic <span class=\"pl-k\">=<\/span> model.aic<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC22\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> saving best model, AIC and parameters<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC23\" class=\"blob-code blob-code-inner js-file-line\">        <span class=\"pl-k\">if<\/span> aic <span class=\"pl-k\">&lt;<\/span> best_aic:<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC24\" class=\"blob-code blob-code-inner js-file-line\">            best_model <span class=\"pl-k\">=<\/span> model<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC25\" class=\"blob-code blob-code-inner js-file-line\">            best_aic <span class=\"pl-k\">=<\/span> aic<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC26\" class=\"blob-code blob-code-inner js-file-line\">            best_param <span class=\"pl-k\">=<\/span> param<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L27\" class=\"blob-num js-line-number\" data-line-number=\"27\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC27\" class=\"blob-code blob-code-inner js-file-line\">        results.append([param, model.aic])<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L28\" class=\"blob-num js-line-number\" data-line-number=\"28\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC28\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L29\" class=\"blob-num js-line-number\" data-line-number=\"29\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC29\" class=\"blob-code blob-code-inner js-file-line\">    result_table <span class=\"pl-k\">=<\/span> pd.DataFrame(results)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L30\" class=\"blob-num js-line-number\" data-line-number=\"30\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC30\" class=\"blob-code blob-code-inner js-file-line\">    result_table.columns <span class=\"pl-k\">=<\/span> [<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>parameters<span class=\"pl-pds\">&#39;<\/span><\/span>, <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>aic<span class=\"pl-pds\">&#39;<\/span><\/span>]<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L31\" class=\"blob-num js-line-number\" data-line-number=\"31\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC31\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> sorting in ascending order, the lower AIC is - the better<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L32\" class=\"blob-num js-line-number\" data-line-number=\"32\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC32\" class=\"blob-code blob-code-inner js-file-line\">    result_table <span class=\"pl-k\">=<\/span> result_table.sort_values(<span class=\"pl-v\">by<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>aic<span class=\"pl-pds\">&#39;<\/span><\/span>, <span class=\"pl-v\">ascending<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">True<\/span>).reset_index(<span class=\"pl-v\">drop<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">True<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L33\" class=\"blob-num js-line-number\" data-line-number=\"33\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC33\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L34\" class=\"blob-num js-line-number\" data-line-number=\"34\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC34\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">return<\/span> result_table<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L35\" class=\"blob-num js-line-number\" data-line-number=\"35\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC35\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L36\" class=\"blob-num js-line-number\" data-line-number=\"36\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC36\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">%%<\/span>time<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_optimize_sarima-py-L37\" class=\"blob-num js-line-number\" data-line-number=\"37\"><\/td>\n        <td id=\"file-topic9_optimize_sarima-py-LC37\" class=\"blob-code blob-code-inner js-file-line\">result_table <span class=\"pl-k\">=<\/span> optimizeSARIMA(parameters_list, d, D, s)<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/DmitrySerg/9930fca19a64e23fbe21a73a5cf4dc97/raw/c71cac75f735aaf7c2e3a64f438066b155588c1c/topic9_optimize_sarima.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/DmitrySerg/9930fca19a64e23fbe21a73a5cf4dc97#file-topic9_optimize_sarima-py\">topic9_optimize_sarima.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')