document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-6364c832764ba9bc85e4566bd747f0d1.css">')
document.write('<div id=\"gist86137965\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-feature_engg_text_13-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-python\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-feature_engg_text_13-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-feature_engg_text_13-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">from<\/span> sklearn.cluster <span class=\"pl-k\">import<\/span> KMeans<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feature_engg_text_13-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-feature_engg_text_13-py-LC2\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feature_engg_text_13-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-feature_engg_text_13-py-LC3\" class=\"blob-code blob-code-inner js-file-line\">km <span class=\"pl-k\">=<\/span> KMeans(<span class=\"pl-v\">n_clusters<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">3<\/span>, <span class=\"pl-v\">random_state<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">0<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feature_engg_text_13-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-feature_engg_text_13-py-LC4\" class=\"blob-code blob-code-inner js-file-line\">km.fit_transform(features)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feature_engg_text_13-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-feature_engg_text_13-py-LC5\" class=\"blob-code blob-code-inner js-file-line\">cluster_labels <span class=\"pl-k\">=<\/span> km.labels_<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feature_engg_text_13-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-feature_engg_text_13-py-LC6\" class=\"blob-code blob-code-inner js-file-line\">cluster_labels <span class=\"pl-k\">=<\/span> pd.DataFrame(cluster_labels, <span class=\"pl-v\">columns<\/span><span class=\"pl-k\">=<\/span>[<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>ClusterLabel<span class=\"pl-pds\">&#39;<\/span><\/span>])<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-feature_engg_text_13-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-feature_engg_text_13-py-LC7\" class=\"blob-code blob-code-inner js-file-line\">pd.concat([corpus_df, cluster_labels], <span class=\"pl-v\">axis<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">1<\/span>)<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/dipanjanS/5d638b16b06bea34d6919b087b64da8a/raw/d7e15bb1f936591ba4641cafb945468ea0bf3599/feature_engg_text_13.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/dipanjanS/5d638b16b06bea34d6919b087b64da8a#file-feature_engg_text_13-py\">feature_engg_text_13.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
