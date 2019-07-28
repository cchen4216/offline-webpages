document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-8c6ade0d3779da026346afb9bf324f67.css">')
document.write('<div id=\"gist88900405\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-topic9_scaling-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-python\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-topic9_scaling-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-topic9_scaling-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">from<\/span> sklearn.preprocessing <span class=\"pl-k\">import<\/span> StandardScaler<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_scaling-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-topic9_scaling-py-LC2\" class=\"blob-code blob-code-inner js-file-line\">scaler <span class=\"pl-k\">=<\/span> StandardScaler()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_scaling-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-topic9_scaling-py-LC3\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_scaling-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-topic9_scaling-py-LC4\" class=\"blob-code blob-code-inner js-file-line\">y <span class=\"pl-k\">=<\/span> data.dropna().y<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_scaling-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-topic9_scaling-py-LC5\" class=\"blob-code blob-code-inner js-file-line\">X <span class=\"pl-k\">=<\/span> data.dropna().drop([<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>y<span class=\"pl-pds\">&#39;<\/span><\/span>], <span class=\"pl-v\">axis<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">1<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_scaling-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-topic9_scaling-py-LC6\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_scaling-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-topic9_scaling-py-LC7\" class=\"blob-code blob-code-inner js-file-line\">X_train, X_test, y_train, y_test <span class=\"pl-k\">=<\/span> timeseries_train_test_split(X, y, <span class=\"pl-v\">test_size<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">0.3<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_scaling-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-topic9_scaling-py-LC8\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_scaling-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-topic9_scaling-py-LC9\" class=\"blob-code blob-code-inner js-file-line\">X_train_scaled <span class=\"pl-k\">=<\/span> scaler.fit_transform(X_train)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_scaling-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-topic9_scaling-py-LC10\" class=\"blob-code blob-code-inner js-file-line\">X_test_scaled <span class=\"pl-k\">=<\/span> scaler.transform(X_test)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_scaling-py-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-topic9_scaling-py-LC11\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_scaling-py-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-topic9_scaling-py-LC12\" class=\"blob-code blob-code-inner js-file-line\">lr <span class=\"pl-k\">=<\/span> LinearRegression()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_scaling-py-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-topic9_scaling-py-LC13\" class=\"blob-code blob-code-inner js-file-line\">lr.fit(X_train_scaled, y_train)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_scaling-py-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-topic9_scaling-py-LC14\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_scaling-py-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-topic9_scaling-py-LC15\" class=\"blob-code blob-code-inner js-file-line\">plotModelResults(lr, <span class=\"pl-v\">X_train<\/span><span class=\"pl-k\">=<\/span>X_train_scaled, <span class=\"pl-v\">X_test<\/span><span class=\"pl-k\">=<\/span>X_test_scaled, <span class=\"pl-v\">plot_intervals<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">True<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_scaling-py-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-topic9_scaling-py-LC16\" class=\"blob-code blob-code-inner js-file-line\">plotCoefficients(lr)<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/DmitrySerg/53ab4cad1ea87a04b5e5776b1c083774/raw/bc70c15451fcd8fe09a3daf0a923afb3e5c4c8de/topic9_scaling.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/DmitrySerg/53ab4cad1ea87a04b5e5776b1c083774#file-topic9_scaling-py\">topic9_scaling.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
