document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-8c6ade0d3779da026346afb9bf324f67.css">')
document.write('<div id=\"gist88900510\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-topic9_ridge-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-python\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-topic9_ridge-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-topic9_ridge-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">from<\/span> sklearn.linear_model <span class=\"pl-k\">import<\/span> LassoCV, RidgeCV<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_ridge-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-topic9_ridge-py-LC2\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_ridge-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-topic9_ridge-py-LC3\" class=\"blob-code blob-code-inner js-file-line\">ridge <span class=\"pl-k\">=<\/span> RidgeCV(<span class=\"pl-v\">cv<\/span><span class=\"pl-k\">=<\/span>tscv)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_ridge-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-topic9_ridge-py-LC4\" class=\"blob-code blob-code-inner js-file-line\">ridge.fit(X_train_scaled, y_train)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_ridge-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-topic9_ridge-py-LC5\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_ridge-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-topic9_ridge-py-LC6\" class=\"blob-code blob-code-inner js-file-line\">plotModelResults(ridge, <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_ridge-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-topic9_ridge-py-LC7\" class=\"blob-code blob-code-inner js-file-line\">                 <span class=\"pl-v\">X_train<\/span><span class=\"pl-k\">=<\/span>X_train_scaled, <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_ridge-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-topic9_ridge-py-LC8\" class=\"blob-code blob-code-inner js-file-line\">                 <span class=\"pl-v\">X_test<\/span><span class=\"pl-k\">=<\/span>X_test_scaled, <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_ridge-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-topic9_ridge-py-LC9\" class=\"blob-code blob-code-inner js-file-line\">                 <span class=\"pl-v\">plot_intervals<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">True<\/span>, <span class=\"pl-v\">plot_anomalies<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">True<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic9_ridge-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-topic9_ridge-py-LC10\" class=\"blob-code blob-code-inner js-file-line\">plotCoefficients(ridge)<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/DmitrySerg/9b93360d489ef591bfb3f88d98e6e2da/raw/fd4157f0ded90200e0444fffcbd64dda9f09e597/topic9_ridge.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/DmitrySerg/9b93360d489ef591bfb3f88d98e6e2da#file-topic9_ridge-py\">topic9_ridge.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
