module.exports = async app => {
    return {
        layout: 'page',
        head_title: 'MONTECH',
        target: '/',
        title: 'I18N_MAIN_PAGE',
        headline: true,
        services: [{
                title: 'Sites Web professionnels',
                image: 'https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
                content: `Un site Web personnalisé, avec HTML et CSS personnalisé, sans modèles. Un site Web performant, qui ne prend pas plus de 4 secondes pour se charger via le navigateur. Un site Web qui indexe bien dans les moteurs de recherche. Un site qui peut être hébergé gratuitement, avec des coûts de maintenance réduits`
            },
            {
                title: 'Plateformes web',
                image: 'https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
                content: `Créer une plate-forme Web n'est pas facile. Je peux le faire et bien le faire. Je travaille avec les dernières technologies et chaque projet comporte toutes les étapes d'un projet de la qualité d'une agence numérique, mais avec la flexibilité d'une seule personne et sans trop de bureaucratie.`
            },
            {
                title: 'Soutien technique',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
                content: `Je le soutiens dans tous les aspects liés à l'informatique. Programmation, configuration, installation de matériel informatique. La chose la plus intéressante est que je peux vous conseiller sur l’installation d’alternatives gratuites pour votre organisation. Nous soutenons le logiciel libre!`
            }
        ]
    }
}