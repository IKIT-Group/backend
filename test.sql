-- PETS
DELETE FROM "public"."Pet";

INSERT INTO "public"."Pet" (
    "type", "name",
    "description",
    "image", "gender", "sterilized", "hasPassport", "health", "dateOfBirth"
) VALUES
('cat', 'Шлепа',
'Ласковый котик, любит ИФИЯК и нюхать мяту',
'cat.png', true, true, true, 'great', '2022-01-01'
),
('cat', 'Маруся',
'Чистоплотная и любвеобильная девочка',
'cat.png', true, true, true, 'great', '2023-01-01'
),
('dog', 'Джек',
'Просто хороший мальчик, любит грызть мебель',
'dog.png', true, true, true, 'great', '2023-01-01'
),
('hamster', 'Виталик',
'Хомячьё - дурачьё',
'hamster.png', true, true, true, 'great', '2024-03-01'
);

INSERT INTO "public"."Pet" (
    "type", "name", "description",
    "image", "gender", "sterilized",
    "hasPassport", "health", "dateOfBirth"
) VALUES
('cat', 'Жорик',
'Постоянно голодный, но мы как студенты его понимаем',
'cat.png', true, true, true, 'great', '2022-01-01'
),
('cat', 'Борик',
'Постоянно голодный, но мы как студенты его понимаем',
'cat.png', true, true, true, 'great', '2022-01-01'
),
('cat', 'Жопик',
'Постоянно голодный, но мы как студенты его понимаем',
'cat.png', true, true, true, 'great', '2022-01-01'
),
('cat', 'Анатолий',
'Постоянно голодный, но мы как студенты его понимаем',
'cat.png', true, true, true, 'great', '2022-01-01'
),
('cat', 'Демьян',
'Постоянно голодный, но мы как студенты его понимаем',
'cat.png', true, true, true, 'great', '2022-01-01'
);

INSERT INTO "public"."Pet" ("type", "name", "description", "image", "gender", "sterilized", "hasPassport", "health", "dateOfBirth") VALUES
('cat', 'Бублик', 'Котик-спинальник с очень нежным характером. Потребуется особый уход.', 'pet-fallback.png', TRUE, FALSE, TRUE, 'Требует особого ухода', '2019-04-01'),
('cat', 'Бусинка', 'Активная кошечка, очень любит играть и бегать.', 'pet-fallback.png', FALSE, TRUE, FALSE, 'Отличное', '2022-04-01'),
('cat', 'Нолик', 'Молодой и крайне любознательный кот.', 'pet-fallback.png', TRUE, FALSE, TRUE, 'Отличное', '2022-07-01'),
('cat', 'Фломастер', 'Добрый, ленивый батон в кошачьем обличии.', 'pet-fallback.png', TRUE, TRUE, FALSE, 'Отличное', '2020-04-01'),
('cat', 'Жемчужинка', 'Сильная и независимая кошка, тем не менее, никогда не откажется от лакомства или почёсываний за ушком.', 'pet-fallback.png', FALSE, TRUE, TRUE, 'Отличное', '2016-04-01'),
('cat', 'Метелица', 'Крошка, которая вырастет очень красивой и нежной кошечкой! С рождения полностью отсутствует слух.', 'pet-fallback.png', FALSE, FALSE, FALSE, 'Нет слуха', '2023-03-01'),
('cat', 'Булка', 'Спокойная кошка, которая ценит и своё, и чужое личное пространство.', 'pet-fallback.png', FALSE, TRUE, TRUE, 'Отличное', '2021-04-01'),
('cat', 'Зевс', 'С виду грозный, но крайне добродушный пёсик-великан.', 'pet-fallback.png', TRUE, FALSE, TRUE, 'Отличное', '2020-04-01'),
('cat', 'Тайга', 'Умная и очень воспитанная собака.', 'pet-fallback.png', FALSE, TRUE, FALSE, 'Отличное', '2021-04-01'),
('cat', 'Пончик', 'Молодой, активный пёс, хорошо впишется в семью с детьми.', 'pet-fallback.png', TRUE, TRUE, TRUE, 'Отличное', '2022-04-01'),
('cat', 'Казбек', 'Послушный и милый, несмотря на серьёзную внешность.', 'pet-fallback.png', TRUE, FALSE, FALSE, 'Отличное', '2015-04-01'),
('cat', 'Милка', 'Юная, но уже очень смышлёная девочка.', 'pet-fallback.png', FALSE, FALSE, TRUE, 'Отличное', '2023-01-01'),
('cat', 'Шериф', 'Крутой охранник, который станет вам также прекрасным другом!', 'pet-fallback.png', TRUE, TRUE, FALSE, 'Отличное', '2021-04-01');

-- PRODUCTS
INSERT INTO "public"."Product" ("type", "name", "image", "price", "oldPrice") VALUES
('food', 'Сухой корм Edel Adult для взрослых стерелизованных кошек, 10 кг.', 'edel.png', 4842, null),
('food', 'Сухой корм Edel Adult для взрослых стерелизованных кошек, 1.5 кг.', 'edel.png', 972, 1050),
('care', 'Шампунь для собак и кошек с чувствительной кожей, 500мл.', 'dog-cat-shampoo.jpg', 350, 400),
('accessory', 'Ошейник с GPS-трекером для кошек', 'collar-gps.png', 1200, 1500),
('toy', 'Интерактивная игрушка "Лазерная указка"', 'laser.jpg', 250, null),
('food', 'Консервы для котят "Мясное ассорти"', 'meat-assorti.png', 500, 550),
('accessory', 'Транспортный рюкзак для кошек', 'cat-backpack.jpg', 2500, 2700),

('toy', 'Мячик с колокольчиком', 'ball-bell.jpg', 100, 150),
('accessory', 'Когтеточка-домик', 'house.jpg', 1500, 1700),
('care', 'Капли от блох и клещей для кошек', 'drops.jpg', 850, 900),
('accessory', 'Когтеточка-дерево', 'tree.jpeg', 3000, 3200),
('toy', 'Игрушка-мышь', 'mouse.jpg', 200, 250),

('accessory', 'Лежак для кошек "Облачко"', 'cloud.jpg', 3000, 3200),
('accessory', 'Ошейник с биркой на имя', 'collar-with-name.png', 500, 550),
('toy', 'Игровой туннель для кошек', 'tunnel.png', 1200, 1300),

('food', 'Сухой корм для собак "Добрый друг", 15 кг.', 'dry-dog-food.jpg', 3200, 3500),
('food', 'Лакомство для собак "Косточка с мясом"', 'bones.jpg', 150, null),
('care', 'Шампунь для собак с длинной шерстью', 'dog-shampoo.jpg', 400, 450),
('accessory', 'Ошейник с LED-подсветкой для собак', 'collar-led.jpg', 800, 850),
('toy', 'Игрушка для собак "Пищащий мяч"', 'ball-sound.jpg', 300, null),
('food', 'Корм для хомяков "Little one"', 'hamster-food.png', 250, 300),
('care', 'Наполнитель для клетки хомяков "Эко-комфорт"', 'filling.jpg', 200, 250),
('accessory', 'Колесо для бега хомяков', 'wheel.jpg', 500, 550);