--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4
-- Dumped by pg_dump version 14.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."User" (id, name, email, "emailVerified", image, "hashedPassword", "createdAt", "updatedAt") VALUES ('20446661-1e9d-4b50-8b12-c9e97f27fe6b', 'yanis tabellout', 'yanis@gmail.com', NULL, NULL, '$2b$12$Sh8gkXO1m5BmlFT0eVj54OvUILc.baDf3HKZpOxhYgXfq9SXcqp1e', '2023-06-16 14:19:09.847', '2023-06-16 14:19:09.847');
INSERT INTO public."User" (id, name, email, "emailVerified", image, "hashedPassword", "createdAt", "updatedAt") VALUES ('a35f45c5-7bc7-451a-8fa6-1188bfca3de5', 'yanis', 'yanis2@gmail.com', NULL, NULL, '$2b$12$B0g7zBdvEgLAX0SgQZ40MOuW5WypGKNfxjgvKFFf.97IkhpdJwS3i', '2023-06-19 22:22:10.974', '2023-06-19 22:22:10.974');


--
-- Data for Name: Account; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: Order; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."Order" (id, date, amount, status, type, "userId", checkout_status, checkout_url, payment_status) VALUES ('cs_test_a1aHHN3KoMjVf9UiXSlEBgci3jMtb1WVGFAoy1Vdt5ryD3BUxK01OKGGwf', '2023-06-19 01:33:13.736', 10, 'progress', '', '20446661-1e9d-4b50-8b12-c9e97f27fe6b', 'complete', '', 'paid');


--
-- Data for Name: Product; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."Product" (id, quantity, category_ids, price, name, image, description) VALUES ('1414f1af-b57c-4da3-bbe9-6a52c62707fe', 0, '', 20, 'Gray Jacket', 'https://images.bestsellerclothing.in/data/JJ/3-aug-2022/186543001_g1.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto', '           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eaque officiis iste tempora vero! Cupiditate in incidunt nobis quam suscipit!');
INSERT INTO public."Product" (id, quantity, category_ids, price, name, image, description) VALUES ('2b137009-d859-4bb0-a8bd-234fab27b315', 0, '', 10, 'Black Shirt', 'https://cdn.shopify.com/s/files/1/0752/6435/products/IMG_0166_2fea8735-d493-49c3-8b4c-8e4392dc2ce4.jpg?v=1668772433', '           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eaque officiis iste tempora vero! Cupiditate in incidunt nobis quam suscipit!');
INSERT INTO public."Product" (id, quantity, category_ids, price, name, image, description) VALUES ('6126a559-ff0a-454c-8573-cfeee546f3a2', 0, '', 100, 'Air Jordan 1', 'https://sothebys-com.brightspotcdn.com/dims4/default/26ae228/2147483647/strip/true/crop/3543x2338+0+0/resize/684x451!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2Fba%2F63%2F5448ec3a43ad881557d41485631d%2F972sneakers-cfk7z-t3-01-1.jpg', '           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eaque officiis iste tempora vero! Cupiditate in incidunt nobis quam suscipit!');
INSERT INTO public."Product" (id, quantity, category_ids, price, name, image, description) VALUES ('7aa557e4-a9c5-4f9e-94a8-d11d120d8e09', 0, '', 20, 'White Shirt', 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fbec94f6-6114-4ff6-a4aa-4575ddc1e8bc/primary-mens-dri-fit-short-sleeve-versatile-top-XK77j1.png', '           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eaque officiis iste tempora vero! Cupiditate in incidunt nobis quam suscipit!');


--
-- Data for Name: BasketProductOrder; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."BasketProductOrder" (id_order, id_product, qte) VALUES ('cs_test_a1aHHN3KoMjVf9UiXSlEBgci3jMtb1WVGFAoy1Vdt5ryD3BUxK01OKGGwf', '2b137009-d859-4bb0-a8bd-234fab27b315', 1);


--
-- Data for Name: Category; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."Category" (id, name) VALUES ('656f87c2-5685-4858-ab64-7fd594d6ced9', 'Men');
INSERT INTO public."Category" (id, name) VALUES ('1be1abb6-b295-4ced-945d-a87e35a8c8cd', 'Women');
INSERT INTO public."Category" (id, name) VALUES ('565abfba-1472-4aa7-89a4-ae0783a8eada', 'Shoes');
INSERT INTO public."Category" (id, name) VALUES ('d98ddd01-c2ec-4c97-8b52-19402e266257', 'T-Shirts');
INSERT INTO public."Category" (id, name) VALUES ('0c2cd942-db0a-4252-953b-2989c77a53b5', 'Jackets');


--
-- Data for Name: _CategoryToProduct; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."_CategoryToProduct" ("A", "B") VALUES ('656f87c2-5685-4858-ab64-7fd594d6ced9', '2b137009-d859-4bb0-a8bd-234fab27b315');
INSERT INTO public."_CategoryToProduct" ("A", "B") VALUES ('d98ddd01-c2ec-4c97-8b52-19402e266257', '2b137009-d859-4bb0-a8bd-234fab27b315');
INSERT INTO public."_CategoryToProduct" ("A", "B") VALUES ('656f87c2-5685-4858-ab64-7fd594d6ced9', '6126a559-ff0a-454c-8573-cfeee546f3a2');
INSERT INTO public."_CategoryToProduct" ("A", "B") VALUES ('1be1abb6-b295-4ced-945d-a87e35a8c8cd', '6126a559-ff0a-454c-8573-cfeee546f3a2');
INSERT INTO public."_CategoryToProduct" ("A", "B") VALUES ('565abfba-1472-4aa7-89a4-ae0783a8eada', '6126a559-ff0a-454c-8573-cfeee546f3a2');
INSERT INTO public."_CategoryToProduct" ("A", "B") VALUES ('656f87c2-5685-4858-ab64-7fd594d6ced9', '7aa557e4-a9c5-4f9e-94a8-d11d120d8e09');
INSERT INTO public."_CategoryToProduct" ("A", "B") VALUES ('1be1abb6-b295-4ced-945d-a87e35a8c8cd', '7aa557e4-a9c5-4f9e-94a8-d11d120d8e09');
INSERT INTO public."_CategoryToProduct" ("A", "B") VALUES ('d98ddd01-c2ec-4c97-8b52-19402e266257', '7aa557e4-a9c5-4f9e-94a8-d11d120d8e09');
INSERT INTO public."_CategoryToProduct" ("A", "B") VALUES ('656f87c2-5685-4858-ab64-7fd594d6ced9', '1414f1af-b57c-4da3-bbe9-6a52c62707fe');
INSERT INTO public."_CategoryToProduct" ("A", "B") VALUES ('0c2cd942-db0a-4252-953b-2989c77a53b5', '1414f1af-b57c-4da3-bbe9-6a52c62707fe');


--
-- Data for Name: _OrderToProduct; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."_OrderToProduct" ("A", "B") VALUES ('cs_test_a1aHHN3KoMjVf9UiXSlEBgci3jMtb1WVGFAoy1Vdt5ryD3BUxK01OKGGwf', '2b137009-d859-4bb0-a8bd-234fab27b315');


--
-- Data for Name: _ProductToUser; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('f67c3197-feac-400d-b7f2-1d60e71edb84', '79d46cf0cbc53600b57a8ba3f3cec769b5cc6f8ad16facbdc212cd84bc5ea102', '2023-06-16 15:08:23.877462+01', '20230611152932_initial', NULL, NULL, '2023-06-16 15:08:23.780714+01', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('f8796373-cc77-44b0-a5bf-2d78246cc7cf', 'f16464d4dd5a4ca13adda325c206d5667796a0004907691453d27f25203151d2', '2023-06-16 15:08:23.884067+01', '20230611172341_product', NULL, NULL, '2023-06-16 15:08:23.879264+01', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('b7e48041-8e9f-4738-988a-dc63911e1bef', '3057920408a03652c07723b00f1b7b547213139bbd873c6abda371d5327fca8d', '2023-06-16 15:08:23.890029+01', '20230611172500_image', NULL, NULL, '2023-06-16 15:08:23.88548+01', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('ccffa531-af67-4fbc-96da-11710ab4f639', '1bd659f46878938073bf1ce9fa37582022759980784829bd929531fcecba6685', '2023-06-16 15:08:33.134984+01', '20230616140833_idk', NULL, NULL, '2023-06-16 15:08:33.113368+01', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('369822d7-ff55-4ac7-9caf-2030988a3eed', '759574333f733955fc7cb24f6fec221a22c2f8e6a9885d65a4fcfe0c60074c76', '2023-06-17 01:02:13.27091+01', '20230617000213_order', NULL, NULL, '2023-06-17 01:02:13.216596+01', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('0003b779-fb29-413d-be7d-dc59de95cc7d', 'b514c0bc82613221b9aeef9a368ced008c2be7b2e47bee0d5381d255b31475c9', '2023-06-18 14:54:13.226807+01', '20230618135413_updating_orders', NULL, NULL, '2023-06-18 14:54:13.186893+01', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('59290402-ecc9-4ce1-8cce-7f5c7b32ee5c', '5322ab45715df98f67b093308461d1423056bedeb67dec173a3363b406e74d97', '2023-06-18 15:37:18.553674+01', '20230618143718_order', NULL, NULL, '2023-06-18 15:37:18.527114+01', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('0a05fe40-226e-4900-82a6-bc123f5da8d7', '717c7f849e30dde98c5e145a4668bb9f1b9b261d7d7def1688e4eef7d4043cf8', '2023-06-18 17:32:47.769721+01', '20230618163247_iesze', NULL, NULL, '2023-06-18 17:32:47.735246+01', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('fe3c209f-a7d6-4972-be04-0b13c1806a45', '61a5f3e9f14cec60d036fd2589b48c385f5fe904de81ea27cd5e95a0184247c5', '2023-06-18 22:30:25.72789+01', '20230618213025_quantity_per_order', NULL, NULL, '2023-06-18 22:30:25.69621+01', 1);
INSERT INTO public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) VALUES ('70433f86-c3aa-4cd3-a19e-f319abfcc163', '83ffb57cfe45f6fa4e4bc5937213c813af63e1cae7f77551f3a22cfbe699b8d3', '2023-06-19 02:31:19.823405+01', '20230619013119_idk', NULL, NULL, '2023-06-19 02:31:19.787081+01', 1);


--
-- PostgreSQL database dump complete
--

