import Product from "../product/product.js";

const products = [
    new Product(
        "Fernando",
        10000,
        ["Entrada"],
        "Crujientes empanadas de carne desmechada con hogao casero, acompañadas de ají de la casa.",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCXSP_B-LGu-sMyt5QJu1AgpgAXmbzX3nkEDohVFQ0O-C9dXLOWTGSQGnrxJmnXhTrpsoEgizAb-uxK7YZWfZwcXYkMUzp7QTCu8JDbDYEbSNOYttMfvtU_Mk2zvg1wEDFYoZnwzMk61LqyM7gFOR3wpkkL-uk8_q_jelEOPAepyj_tYq6sz3g0kSnH9clcfuOXhXA9rsg8YA2xx2r0VNETWF09CKsY0IFzkraCyKIV-7Dk8JzxH7L_"
    ),
    new Product(
        "Silvestre",
        10000,
        ["Entrada", "Vegano"],
        "Rolls de yuca rellenos de vegetales salteados con salsa de aguacate y cilantro fresco.",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA65ruuwar2LWcSQ_Dqx5onp8jQmx1x_LfXraDB9pdu0iwwpQCX3IPrm2gsY3KtTJL9L38kJB1uwW2EC4sEHMT2u_tP4wmtNMviimVdTYlsMd2k3CMSxY7CTicgcMua1Va5woU6e-_IMDAiOxaEExdmd__D-wRUUewYB014bkE0S1htt3XZHH4N-3gHYaeFEb6wKqPJFQ7gtYBCAf5Ct_I7rwa7JPZ4Z2Ja2qMmD2sitWHjyhxh1gh6"
    ),
    new Product(
        "Oscar",
        12000,
        ["Entrada"],
        "Patacones dorados con ceviche de camarón, limón y un toque de ají dulce colombiano.",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBlRuEeQob8kYjfydnU85W1a9AcjawDYDO3kocXM9Zikg4LoqU8CuAxmEtYLkYv15mu_MI8SPI1Li-bJM2dAaW2bQ6Ra9Ndm6RWbcuQwqciu3__gCnzDROwl4LGWIGgx1Kokn8QCF29wNAL8WTGVkWwvFLk505J_Htbr_B5Kvm2NXp_046er3EQYRv7ZuYrZKfR11562n0SD6FwVQGlspBA5OH-rUcou8S3O6Je7nbf8yrBqCyH2Yqq"
    ),
    new Product(
        "Raíces",
        14000,
        ["Entrada"],
        "Sopa de ajiaco santafereño con pollo desmechado, alcaparras, crema y aguacate.",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCXSP_B-LGu-sMyt5QJu1AgpgAXmbzX3nkEDohVFQ0O-C9dXLOWTGSQGnrxJmnXhTrpsoEgizAb-uxK7YZWfZwcXYkMUzp7QTCu8JDbDYEbSNOYttMfvtU_Mk2zvg1wEDFYoZnwzMk61LqyM7gFOR3wpkkL-uk8_q_jelEOPAepyj_tYq6sz3g0kSnH9clcfuOXhXA9rsg8YA2xx2r0VNETWF09CKsY0IFzkraCyKIV-7Dk8JzxH7L_"
    ),
    new Product(
        "Jardín",
        11000,
        ["Entrada", "Vegano"],
        "Ensalada fresca de quinoa, mango, aguacate y vinagreta de maracuyá con hierbas del huerto.",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA65ruuwar2LWcSQ_Dqx5onp8jQmx1x_LfXraDB9pdu0iwwpQCX3IPrm2gsY3KtTJL9L38kJB1uwW2EC4sEHMT2u_tP4wmtNMviimVdTYlsMd2k3CMSxY7CTicgcMua1Va5woU6e-_IMDAiOxaEExdmd__D-wRUUewYB014bkE0S1htt3XZHH4N-3gHYaeFEb6wKqPJFQ7gtYBCAf5Ct_I7rwa7JPZ4Z2Ja2qMmD2sitWHjyhxh1gh6"
    ),
    new Product(
        "Abuela",
        18000,
        ["Plato Fuerte"],
        "Bandeja paisa tradicional con frijoles, arroz, chicharrón, huevo, arepa y maduro.",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBlRuEeQob8kYjfydnU85W1a9AcjawDYDO3kocXM9Zikg4LoqU8CuAxmEtYLkYv15mu_MI8SPI1Li-bJM2dAaW2bQ6Ra9Ndm6RWbcuQwqciu3__gCnzDROwl4LGWIGgx1Kokn8QCF29wNAL8WTGVkWwvFLk505J_Htbr_B5Kvm2NXp_046er3EQYRv7ZuYrZKfR11562n0SD6FwVQGlspBA5OH-rUcou8S3O6Je7nbf8yrBqCyH2Yqq"
    ),
    new Product(
        "Tradición",
        20000,
        ["Plato Fuerte"],
        "Lomo de cerdo en salsa de tamarindo con arroz de coco y ensalada tropical.",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAEZqMeTahwGjtsXqlq_bwYCZx0vzL4gi3uvXtvQE5YVnUg57_Yvh8CFDn2JJ8EYdZVluqsupZoa8ObBT0YFCpgTPIS-lmRNCHEOpKJKa5dJOVO0NU_kLGDO0ItvanzI_28rmvuxgug-kXLkaVMx7yLOKoTll7qS7VQXoqttIH-nxrGsNyjBc8W4vWW7OvLxOrjz9er0fgXEarf30s9vuyEJsJxxHvN9dBzo1i5jb9Zcqd4_z42aUsN"
    ),
    new Product(
        "Montaña",
        25000,
        ["Plato Fuerte", "Especial del Día"],
        "Trucha arcoíris de río con papa criolla dorada, ensalada campesina y limón.",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCXSP_B-LGu-sMyt5QJu1AgpgAXmbzX3nkEDohVFQ0O-C9dXLOWTGSQGnrxJmnXhTrpsoEgizAb-uxK7YZWfZwcXYkMUzp7QTCu8JDbDYEbSNOYttMfvtU_Mk2zvg1wEDFYoZnwzMk61LqyM7gFOR3wpkkL-uk8_q_jelEOPAepyj_tYq6sz3g0kSnH9clcfuOXhXA9rsg8YA2xx2r0VNETWF09CKsY0IFzkraCyKIV-7Dk8JzxH7L_"
    ),
    new Product(
        "Aguapanela",
        5000,
        ["Bebida"],
        "Aguapanela artesanal con limón, preparada con panela orgánica de caña de la región.",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA65ruuwar2LWcSQ_Dqx5onp8jQmx1x_LfXraDB9pdu0iwwpQCX3IPrm2gsY3KtTJL9L38kJB1uwW2EC4sEHMT2u_tP4wmtNMviimVdTYlsMd2k3CMSxY7CTicgcMua1Va5woU6e-_IMDAiOxaEExdmd__D-wRUUewYB014bkE0S1htt3XZHH4N-3gHYaeFEb6wKqPJFQ7gtYBCAf5Ct_I7rwa7JPZ4Z2Ja2qMmD2sitWHjyhxh1gh6"
    ),
    new Product(
        "Limonada de Coco",
        7000,
        ["Bebida"],
        "Refrescante limonada natural con leche de coco y hierbabuena, servida bien fría.",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBlRuEeQob8kYjfydnU85W1a9AcjawDYDO3kocXM9Zikg4LoqU8CuAxmEtYLkYv15mu_MI8SPI1Li-bJM2dAaW2bQ6Ra9Ndm6RWbcuQwqciu3__gCnzDROwl4LGWIGgx1Kokn8QCF29wNAL8WTGVkWwvFLk505J_Htbr_B5Kvm2NXp_046er3EQYRv7ZuYrZKfR11562n0SD6FwVQGlspBA5OH-rUcou8S3O6Je7nbf8yrBqCyH2Yqq"
    ),
    new Product(
        "Mariela",
        12000,
        ["Postre"],
        "Tres leches de arequipe con canela y frutos rojos frescos de la cosecha local.",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAEZqMeTahwGjtsXqlq_bwYCZx0vzL4gi3uvXtvQE5YVnUg57_Yvh8CFDn2JJ8EYdZVluqsupZoa8ObBT0YFCpgTPIS-lmRNCHEOpKJKa5dJOVO0NU_kLGDO0ItvanzI_28rmvuxgug-kXLkaVMx7yLOKoTll7qS7VQXoqttIH-nxrGsNyjBc8W4vWW7OvLxOrjz9er0fgXEarf30s9vuyEJsJxxHvN9dBzo1i5jb9Zcqd4_z42aUsN"
    ),
    new Product(
        "Dulce Hogar",
        8000,
        ["Postre", "Vegano"],
        "Mousse de maracuyá vegano con base de coco rallado y coulis de frutos tropicales.",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCXSP_B-LGu-sMyt5QJu1AgpgAXmbzX3nkEDohVFQ0O-C9dXLOWTGSQGnrxJmnXhTrpsoEgizAb-uxK7YZWfZwcXYkMUzp7QTCu8JDbDYEbSNOYttMfvtU_Mk2zvg1wEDFYoZnwzMk61LqyM7gFOR3wpkkL-uk8_q_jelEOPAepyj_tYq6sz3g0kSnH9clcfuOXhXA9rsg8YA2xx2r0VNETWF09CKsY0IFzkraCyKIV-7Dk8JzxH7L_"
    )
];

export default products;
