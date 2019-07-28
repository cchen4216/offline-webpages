document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-4e8330898d16b1b65e7f0856076a5a28.css">')
document.write('<div id=\"gist82173230\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-vae-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-python \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-vae-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-vae-py-LC1\" class=\"blob-code blob-code-inner js-file-line\">tf.reset_default_graph()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-vae-py-LC2\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-vae-py-LC3\" class=\"blob-code blob-code-inner js-file-line\">batch_size <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">64<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-vae-py-LC4\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-vae-py-LC5\" class=\"blob-code blob-code-inner js-file-line\">X_in <span class=\"pl-k\">=<\/span> tf.placeholder(<span class=\"pl-v\">dtype<\/span><span class=\"pl-k\">=<\/span>tf.float32, <span class=\"pl-v\">shape<\/span><span class=\"pl-k\">=<\/span>[<span class=\"pl-c1\">None<\/span>, <span class=\"pl-c1\">28<\/span>, <span class=\"pl-c1\">28<\/span>], <span class=\"pl-v\">name<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>X<span class=\"pl-pds\">&#39;<\/span><\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-vae-py-LC6\" class=\"blob-code blob-code-inner js-file-line\">Y    <span class=\"pl-k\">=<\/span> tf.placeholder(<span class=\"pl-v\">dtype<\/span><span class=\"pl-k\">=<\/span>tf.float32, <span class=\"pl-v\">shape<\/span><span class=\"pl-k\">=<\/span>[<span class=\"pl-c1\">None<\/span>, <span class=\"pl-c1\">28<\/span>, <span class=\"pl-c1\">28<\/span>], <span class=\"pl-v\">name<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>Y<span class=\"pl-pds\">&#39;<\/span><\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-vae-py-LC7\" class=\"blob-code blob-code-inner js-file-line\">Y_flat <span class=\"pl-k\">=<\/span> tf.reshape(Y, <span class=\"pl-v\">shape<\/span><span class=\"pl-k\">=<\/span>[<span class=\"pl-k\">-<\/span><span class=\"pl-c1\">1<\/span>, <span class=\"pl-c1\">28<\/span> <span class=\"pl-k\">*<\/span> <span class=\"pl-c1\">28<\/span>])<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-vae-py-LC8\" class=\"blob-code blob-code-inner js-file-line\">keep_prob <span class=\"pl-k\">=<\/span> tf.placeholder(<span class=\"pl-v\">dtype<\/span><span class=\"pl-k\">=<\/span>tf.float32, <span class=\"pl-v\">shape<\/span><span class=\"pl-k\">=<\/span>(), <span class=\"pl-v\">name<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>keep_prob<span class=\"pl-pds\">&#39;<\/span><\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-vae-py-LC9\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-vae-py-LC10\" class=\"blob-code blob-code-inner js-file-line\">dec_in_channels <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">1<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-vae-py-LC11\" class=\"blob-code blob-code-inner js-file-line\">n_latent <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">8<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-vae-py-LC12\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-vae-py-LC13\" class=\"blob-code blob-code-inner js-file-line\">reshaped_dim <span class=\"pl-k\">=<\/span> [<span class=\"pl-k\">-<\/span><span class=\"pl-c1\">1<\/span>, <span class=\"pl-c1\">7<\/span>, <span class=\"pl-c1\">7<\/span>, dec_in_channels]<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-vae-py-LC14\" class=\"blob-code blob-code-inner js-file-line\">inputs_decoder <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">49<\/span> <span class=\"pl-k\">*<\/span> dec_in_channels <span class=\"pl-k\">/<\/span> <span class=\"pl-c1\">2<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-vae-py-LC15\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-vae-py-LC16\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-vae-py-LC17\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">def<\/span> <span class=\"pl-en\">lrelu<\/span>(<span class=\"pl-smi\">x<\/span>, <span class=\"pl-smi\">alpha<\/span><span class=\"pl-k\">=<\/span><span class=\"pl-c1\">0.3<\/span>):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-vae-py-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-vae-py-LC18\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-k\">return<\/span> tf.maximum(x, tf.multiply(x, alpha))<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/FelixMohr/08167aa0c82e879f16b8e1a905f839cb/raw/b7596203efdf515fae990194a3f383dc994058b5/vae.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/FelixMohr/08167aa0c82e879f16b8e1a905f839cb#file-vae-py\">vae.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')