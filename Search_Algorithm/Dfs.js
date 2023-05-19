

function dfs(tree, fn, level) {
    fn(tree, level)
    tree.children.forEach(function (child) {
        dfs(child, fn, level + 1)
    })
}