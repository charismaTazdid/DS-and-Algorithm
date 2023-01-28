// LRU (Least Recent Used) Cache


class LRUCache {
    constructor(max = 5) {
        this.max = max;
        this.cache = new Map()
    };

    getData(key) {
        let item = this.cache.get(key);
        if (item) {
            this.cache.delete(key);
            this.cache.set(key, item)
        }
        return item;
    };

    setData(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }

        else if (this.cache.size === this.max) {
            this.cache.delete(this.first())
        }
        this.cache.set(key, value)
    };

    first() {
        return this.cache.keys().next().value;
    }
}

const lru = new LRUCache()

lru.setData("name", "Raihan Tazdid");
lru.setData("age", 24);
lru.setData("passion", "Programming");
lru.setData("country", "Bangladesh");
lru.setData("City", "Chittagong");


console.log(lru.cache) /* Output:  { 'name' => 'Raihan Tazdid',
                                     'age' => 24,
                                     'passion' => 'Programming',
                                     'country' => 'Bangladesh',
                                     'City' => 'Chittagong'
                                    } */


lru.getData("name") // the name will set as last property of our cache list

console.log(lru.cache) /* Output: { 'age' => 24,
                                'passion' => 'Programming',
                                 'country' => 'Bangladesh',
                                 'City' => 'Chittagong',
                                 'name' => 'Raihan Tazdid'}
                          */

lru.setData("gf", null) // this oparation will remove first property of the cache list. and set the new property:  "gf" => "none" Cause our  max limite crosed.


console.log(lru.cache) /* Output: { 'passion' => 'Programming',
                                 'country' => 'Bangladesh',
                                 'City' => 'Chittagong',
                                 'name' => 'Raihan Tazdid'
                                 'gf' => null
                                }
                          */
