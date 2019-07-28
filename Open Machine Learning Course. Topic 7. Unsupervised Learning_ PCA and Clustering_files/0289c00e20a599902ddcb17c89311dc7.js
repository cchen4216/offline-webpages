document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-6364c832764ba9bc85e4566bd747f0d1.css">')
document.write('<div id=\"gist88612602\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-topic7_12-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-python\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-topic7_12-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-topic7_12-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Scipy has function that takes 2 tuples and return<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_12-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-topic7_12-py-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> calculated distance between them<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_12-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-topic7_12-py-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">from<\/span> scipy.spatial.distance <span class=\"pl-k\">import<\/span> cdist<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_12-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-topic7_12-py-LC4\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_12-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-topic7_12-py-LC5\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Randomly allocate the 3 centroids <\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_12-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-topic7_12-py-LC6\" class=\"blob-code blob-code-inner js-file-line\">np.random.seed(<span class=\"pl-v\">seed<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">42<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_12-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-topic7_12-py-LC7\" class=\"blob-code blob-code-inner js-file-line\">centroids <span class=\"pl-k\">=<\/span> np.random.normal(<span class=\"pl-v\">loc<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">0.0<\/span>, <span class=\"pl-v\">scale<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">1<\/span>., <span class=\"pl-v\">size<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">6<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_12-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-topic7_12-py-LC8\" class=\"blob-code blob-code-inner js-file-line\">centroids <span class=\"pl-k\">=<\/span> centroids.reshape((<span class=\"pl-c1\">3<\/span>, <span class=\"pl-c1\">2<\/span>))<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_12-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-topic7_12-py-LC9\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_12-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-topic7_12-py-LC10\" class=\"blob-code blob-code-inner js-file-line\">cent_history <span class=\"pl-k\">=<\/span> []<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_12-py-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-topic7_12-py-LC11\" class=\"blob-code blob-code-inner js-file-line\">cent_history.append(centroids)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_12-py-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-topic7_12-py-LC12\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_12-py-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-topic7_12-py-LC13\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">for<\/span> i <span class=\"pl-k\">in<\/span> <span class=\"pl-c1\">range<\/span>(<span class=\"pl-c1\">3<\/span>):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_12-py-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-topic7_12-py-LC14\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Calculating the distance from a point to a centroid<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_12-py-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-topic7_12-py-LC15\" class=\"blob-code blob-code-inner js-file-line\">    distances <span class=\"pl-k\">=<\/span> cdist(X, centroids)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_12-py-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-topic7_12-py-LC16\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Checking what&#39;s the closest centroid for the point<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_12-py-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-topic7_12-py-LC17\" class=\"blob-code blob-code-inner js-file-line\">    labels <span class=\"pl-k\">=<\/span> distances.argmin(<span class=\"pl-v\">axis<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">1<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_12-py-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-topic7_12-py-LC18\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_12-py-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-topic7_12-py-LC19\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Labeling the point according the point&#39;s distance<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_12-py-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-topic7_12-py-LC20\" class=\"blob-code blob-code-inner js-file-line\">    centroids <span class=\"pl-k\">=<\/span> centroids.copy()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_12-py-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-topic7_12-py-LC21\" class=\"blob-code blob-code-inner js-file-line\">    centroids[<span class=\"pl-c1\">0<\/span>, :] <span class=\"pl-k\">=<\/span> np.mean(X[labels <span class=\"pl-k\">==<\/span> <span class=\"pl-c1\">0<\/span>, :], <span class=\"pl-v\">axis<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">0<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_12-py-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-topic7_12-py-LC22\" class=\"blob-code blob-code-inner js-file-line\">    centroids[<span class=\"pl-c1\">1<\/span>, :] <span class=\"pl-k\">=<\/span> np.mean(X[labels <span class=\"pl-k\">==<\/span> <span class=\"pl-c1\">1<\/span>, :], <span class=\"pl-v\">axis<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">0<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_12-py-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-topic7_12-py-LC23\" class=\"blob-code blob-code-inner js-file-line\">    centroids[<span class=\"pl-c1\">2<\/span>, :] <span class=\"pl-k\">=<\/span> np.mean(X[labels <span class=\"pl-k\">==<\/span> <span class=\"pl-c1\">2<\/span>, :], <span class=\"pl-v\">axis<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">0<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_12-py-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-topic7_12-py-LC24\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-topic7_12-py-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-topic7_12-py-LC25\" class=\"blob-code blob-code-inner js-file-line\">    cent_history.append(centroids)<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/libfun/0289c00e20a599902ddcb17c89311dc7/raw/7328d192c38c8f95e5aec3edb3ba2dc466c6de1e/topic7_12.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/libfun/0289c00e20a599902ddcb17c89311dc7#file-topic7_12-py\">topic7_12.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')