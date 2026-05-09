# SPU Frontend → Laravel Blade Migration Report

*Complete Planning & Architecture Document*

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Directory Structure](#2-directory-structure)
3. [Database Schema Design](#3-database-schema-design)
4. [Eloquent Models](#4-eloquent-models)
5. [Controllers & Routes](#5-controllers--routes)
6. [Views & Components](#6-views--components)
7. [Hybrid Migration Strategy](#7-hybrid-migration-strategy)
8. [Fragment-to-View Conversion Map](#8-fragment-to-view-conversion-map)
9. [API Design](#9-api-design)
10. [Bilingual Content Strategy](#10-bilingual-content-strategy)
11. [Alpine.js to Blade Conversion](#11-alpinejs-to-blade-conversion)
12. [Page-by-Page Conversion Plan](#12-page-by-page-conversion-plan)
13. [Implementation Phases](#13-implementation-phases)
14. [Seed Data Migration](#14-seed-data-migration)

---

## 1. Architecture Overview

### Current State (Alpine.js Frontend)

```
Spu-Website/
├── src/
│   ├── main.js                    # Entry point
│   ├── config/
│   │   ├── site-routes.js        # Route name → URL mapping
│   │   └── site-pages.json       # Page configs (60 pages)
│   ├── alpine/
│   │   ├── register-stores.js    # Alpine store registration
│   │   └── pages/                # Page-specific stores
│   ├── data/                     # Static content (becomes DB)
│   │   ├── layout-content.js     # Nav, footer, UI strings
│   │   └── pages/                # Page-specific data
│   ├── fragments/                 # HTML with Alpine directives
│   │   ├── layout/               # header.html, footer.html
│   │   └── pages/                # home/, about/, faculties/, etc.
│   ├── loader/
│   │   └── page-loader.js        # Dynamic fragment loading
│   └── styles/                   # CSS files
├── index.html                    # Entry HTML
└── vite.config.js               # Vite configuration
```

### Target State (Laravel Blade MVC)

```
laravel-repo/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── HomeController.php
│   │   │   ├── FacultyController.php
│   │   │   ├── NewsController.php
│   │   │   ├── PageController.php
│   │   │   └── Api/
│   │   │       └── SpuDataController.php
│   │   └── Requests/
│   ├── Models/
│   │   ├── Faculty.php
│   │   ├── FacultyTab.php
│   │   ├── FacultyDean.php
│   │   ├── FacultyStat.php
│   │   ├── FacultyHighlight.php
│   │   ├── FacultyEvent.php
│   │   ├── News.php
│   │   ├── Announcement.php
│   │   ├── Event.php
│   │   ├── NavigationItem.php
│   │   ├── FooterContent.php
│   │   ├── HeroContent.php
│   │   ├── HomeStat.php
│   │   └── HonorPanelItem.php
│   └── Helpers/
│       └── Bilingual.php
├── database/
│   ├── migrations/
│   └── seeders/
│       └── SpuSeeder.php
├── resources/
│   └── views/
│       ├── layouts/
│       │   └── spu.blade.php
│       ├── components/
│       │   └── spu/
│       │       ├── navigation.blade.php
│       │       ├── footer.blade.php
│       │       └── ...
│       └── pages/
│           ├── home/
│           ├── faculties/
│           ├── news/
│           └── ...
├── routes/
│   └── web.php
└── public/
    └── build/                    # Vite build output
```

---

## 2. Directory Structure

### Recommended Placement

```
resources/spu-frontend/            ← Frontend source (Alpine/Vite)
├── src/                          # Alpine.js source files
├── public/                       # Static assets
├── index.html
├── vite.config.js
└── package.json

resources/views/                   ← Laravel Blade views
├── layouts/
├── components/
└── pages/

public/build/                      # Vite build output
```

### Migration Steps

1. Copy current `src/`, `index.html`, `vite.config.js`, `package.json` to `resources/spu-frontend/`
2. Update `vite.config.js` to build to `public/build/`
3. Create Blade views in `resources/views/`
4. Connect via Laravel routes

---

## 3. Database Schema Design

### Migrations Required (15 total)

#### 3.1 Faculties Table

```php
// database/migrations/xxxx_create_faculties_table.php
Schema::create('faculties', function (Blueprint $table) {
    $table->uuid('id')->primary();
    $table->string('slug')->unique(); // medicine, dentistry, pharmacy, ai-engineering, construction, petroleum, business
    $table->string('name_ar', 255);
    $table->string('name_en', 255);
    $table->text('description_ar')->nullable();
    $table->text('description_en')->nullable();
    $table->text('catalog_desc_ar')->nullable();
    $table->text('catalog_desc_en')->nullable();
    $table->string('logo_path')->nullable();
    $table->string('color_hex', 7)->default('#1e2652');
    $table->string('hero_image')->nullable();
    $table->string('image_1')->nullable();
    $table->string('image_2')->nullable();
    $table->string('years_ar', 50)->nullable(); // '<span>6</span> سنوات'
    $table->string('years_en', 50)->nullable();
    $table->string('department_route')->nullable();
    $table->string('top_labelar', 255)->nullable();
    $table->string('top_labelen', 255)->nullable();
    $table->unsignedTinyInteger('sort_order')->default(0);
    $table->boolean('is_active')->default(true);
    $table->timestamps();
});
```

#### 3.2 Faculty Tabs Table

```php
// database/migrations/xxxx_create_faculty_tabs_table.php
Schema::create('faculty_tabs', function (Blueprint $table) {
    $table->id();
    $table->foreignUuid('faculty_id')->constrained()->cascadeOnDelete();
    $table->string('tab_id', 50); // overview, vision, mission, objectives
    $table->string('label_ar', 255);
    $table->string('label_en', 255);
    $table->longText('content_ar')->nullable();
    $table->longText('content_en')->nullable();
    $table->unsignedInteger('sort_order')->default(0);
    $table->timestamps();
    $table->unique(['faculty_id', 'tab_id']);
});
```

#### 3.3 Faculty Deans Table

```php
// database/migrations/xxxx_create_faculty_deans_table.php
Schema::create('faculty_deans', function (Blueprint $table) {
    $table->id();
    $table->foreignUuid('faculty_id')->constrained()->cascadeOnDelete();
    $table->string('name_ar', 255);
    $table->string('name_en', 255);
    $table->string('role_ar', 255);
    $table->string('role_en', 255);
    $table->string('image_path')->nullable();
    $table->longText('message_ar')->nullable();
    $table->longText('message_en')->nullable();
    $table->string('section_label_ar', 255)->nullable();
    $table->string('section_label_en', 255)->nullable();
    $table->string('title_prefix_ar', 50)->nullable();
    $table->string('title_prefix_en', 50)->nullable();
    $table->string('cta_ar', 255)->nullable();
    $table->string('cta_en', 255)->nullable();
    $table->timestamps();
});
```

#### 3.4 Faculty Stats Table

```php
// database/migrations/xxxx_create_faculty_stats_table.php
Schema::create('faculty_stats', function (Blueprint $table) {
    $table->id();
    $table->foreignUuid('faculty_id')->constrained()->cascadeOnDelete();
    $table->string('label_ar', 255);
    $table->string('label_en', 255);
    $table->string('value', 100);
    $table->string('icon_path')->nullable();
    $table->unsignedInteger('sort_order')->default(0);
    $table->timestamps();
});
```

#### 3.5 Faculty Highlights Table

```php
// database/migrations/xxxx_create_faculty_highlights_table.php
Schema::create('faculty_highlights', function (Blueprint $table) {
    $table->id();
    $table->foreignUuid('faculty_id')->constrained()->cascadeOnDelete();
    $table->string('title_ar', 255);
    $table->string('title_en', 255);
    $table->string('value', 100);
    $table->string('link')->nullable();
    $table->string('icon_path')->nullable();
    $table->unsignedInteger('sort_order')->default(0);
    $table->timestamps();
});
```

#### 3.6 Faculty Events Table

```php
// database/migrations/xxxx_create_faculty_events_table.php
Schema::create('faculty_events', function (Blueprint $table) {
    $table->id();
    $table->foreignUuid('faculty_id')->constrained()->cascadeOnDelete();
    $table->string('title_ar', 255);
    $table->string('title_en', 255);
    $table->date('event_date');
    $table->longText('description_ar')->nullable();
    $table->longText('description_en')->nullable();
    $table->string('image_path')->nullable();
    $table->unsignedInteger('sort_order')->default(0);
    $table->timestamps();
});
```

#### 3.7 News Table

```php
// database/migrations/xxxx_create_news_table.php
Schema::create('news', function (Blueprint $table) {
    $table->id();
    $table->string('category_ar', 100);
    $table->string('category_en', 100);
    $table->string('title_ar', 500);
    $table->string('title_en', 500);
    $table->text('summary_ar')->nullable();
    $table->text('summary_en')->nullable();
    $table->longText('content_ar')->nullable();
    $table->longText('content_en')->nullable();
    $table->date('news_date')->nullable();
    $table->string('image_path')->nullable();
    $table->string('link')->nullable();
    $table->boolean('is_featured')->default(false);
    $table->boolean('is_active')->default(true);
    $table->unsignedInteger('sort_order')->default(0);
    $table->timestamps();
    $table->index('news_date');
    $table->index('is_featured');
});
```

#### 3.8 Announcements Table

```php
// database/migrations/xxxx_create_announcements_table.php
Schema::create('announcements', function (Blueprint $table) {
    $table->id();
    $table->string('title_ar', 500);
    $table->string('title_en', 500);
    $table->text('summary_ar')->nullable();
    $table->text('summary_en')->nullable();
    $table->date('announcement_date')->nullable();
    $table->string('status_ar', 100)->nullable();
    $table->string('status_en', 100)->nullable();
    $table->string('link')->nullable();
    $table->string('type', 50)->default('megaphone'); // megaphone, info
    $table->boolean('is_active')->default(true);
    $table->unsignedInteger('sort_order')->default(0);
    $table->timestamps();
});
```

#### 3.9 Events Table (Site-wide)

```php
// database/migrations/xxxx_create_events_table.php
Schema::create('events', function (Blueprint $table) {
    $table->id();
    $table->string('title_ar', 255);
    $table->string('title_en', 255);
    $table->date('event_date');
    $table->string('date_display_ar', 100)->nullable();
    $table->string('date_display_en', 100)->nullable();
    $table->string('info_ar', 255)->nullable();
    $table->string('info_en', 255)->nullable();
    $table->string('image_path')->nullable();
    $table->text('description_ar')->nullable();
    $table->text('description_en')->nullable();
    $table->string('link')->nullable();
    $table->string('type', 50)->nullable(); // Seminar, Workshop, Tour, etc.
    $table->boolean('is_active')->default(true);
    $table->unsignedInteger('sort_order')->default(0);
    $table->timestamps();
    $table->index('event_date');
});
```

#### 3.10 Navigation Items Table

```php
// database/migrations/xxxx_create_navigation_items_table.php
Schema::create('navigation_items', function (Blueprint $table) {
    $table->id();
    $table->foreignId('parent_id')->nullable()->constrained('navigation_items')->nullOnDelete();
    $table->string('label_ar', 255);
    $table->string('label_en', 255);
    $table->string('url', 500)->nullable();
    $table->string('page', 100)->nullable();
    $table->boolean('has_dropdown')->default(false);
    $table->boolean('is_protected')->default(false);
    $table->unsignedInteger('sort_order')->default(0);
    $table->boolean('is_active')->default(true);
    $table->timestamps();
    $table->index('parent_id');
    $table->index('page');
});
```

#### 3.11 Footer Content Table

```php
// database/migrations/xxxx_create_footer_content_table.php
Schema::create('footer_content', function (Blueprint $table) {
    $table->id();
    $table->string('section_key', 50); // identity, resources, contact, location, bottom
    $table->string('title_ar', 255)->nullable();
    $table->string('title_en', 255)->nullable();
    $table->json('content_json')->nullable();
    $table->unsignedInteger('sort_order')->default(0);
    $table->timestamps();
    $table->index('section_key');
});
```

#### 3.12 Site Settings Table

```php
// database/migrations/xxxx_create_site_settings_table.php
Schema::create('site_settings', function (Blueprint $table) {
    $table->id();
    $table->string('key', 100)->unique();
    $table->string('value_ar', 500)->nullable();
    $table->string('value_en', 500)->nullable();
    $table->json('value_json')->nullable();
    $table->timestamps();
    $table->index('key');
});
```

#### 3.13 Hero Content Table

```php
// database/migrations/xxxx_create_hero_content_table.php
Schema::create('hero_content', function (Blueprint $table) {
    $table->id();
    $table->string('page', 100)->unique(); // home, faculties, news, etc.
    $table->string('title_ar', 500)->nullable();
    $table->string('title_en', 500)->nullable();
    $table->text('subtitle_ar')->nullable();
    $table->text('subtitle_en')->nullable();
    $table->json('images')->nullable();
    $table->string('primary_btn_ar', 255)->nullable();
    $table->string('primary_btn_en', 255)->nullable();
    $table->string('primary_btn_url', 500)->nullable();
    $table->string('secondary_btn_ar', 255)->nullable();
    $table->string('secondary_btn_en', 255)->nullable();
    $table->string('secondary_btn_url', 500)->nullable();
    $table->string('eyebrow_ar', 255)->nullable();
    $table->string('eyebrow_en', 255)->nullable();
    $table->string('image')->nullable();
    $table->json('links')->nullable();
    $table->boolean('is_active')->default(true);
    $table->timestamps();
    $table->index('page');
});
```

#### 3.14 Home Stats Table

```php
// database/migrations/xxxx_create_home_stats_table.php
Schema::create('home_stats', function (Blueprint $table) {
    $table->id();
    $table->string('label_ar', 255);
    $table->string('label_en', 255);
    $table->text('summary_ar')->nullable();
    $table->text('summary_en')->nullable();
    $table->integer('value')->default(0);
    $table->string('suffix_ar', 50)->nullable();
    $table->string('suffix_en', 50)->nullable();
    $table->string('svg_path', 500)->nullable();
    $table->string('accent', 7)->nullable();
    $table->string('glow', 100)->nullable();
    $table->unsignedInteger('sort_order')->default(0);
    $table->timestamps();
});
```

#### 3.15 Honor Panel Items Table

```php
// database/migrations/xxxx_create_honor_panel_items_table.php
Schema::create('honor_panel_items', function (Blueprint $table) {
    $table->id();
    $table->string('badge_ar', 100)->nullable();
    $table->string('badge_en', 100)->nullable();
    $table->string('meta_ar', 255)->nullable();
    $table->string('meta_en', 255)->nullable();
    $table->string('title_ar', 500)->nullable();
    $table->string('title_en', 500)->nullable();
    $table->text('summary_ar')->nullable();
    $table->text('summary_en')->nullable();
    $table->json('highlights_ar')->nullable();
    $table->json('highlights_en')->nullable();
    $table->string('image_path')->nullable();
    $table->string('link')->nullable();
    $table->unsignedInteger('sort_order')->default(0);
    $table->boolean('is_active')->default(true);
    $table->timestamps();
});
```

---

## 4. Eloquent Models

### Core Models

```php
// app/Models/Faculty.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Faculty extends Model
{
    protected $fillable = [
        'slug', 'name_ar', 'name_en', 'description_ar', 'description_en',
        'catalog_desc_ar', 'catalog_desc_en', 'logo_path', 'color_hex',
        'hero_image', 'image_1', 'image_2', 'years_ar', 'years_en',
        'department_route', 'top_labelar', 'top_labelen', 'sort_order', 'is_active'
    ];
    
    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function tabs(): HasMany
    {
        return $this->hasMany(FacultyTab::class)->orderBy('sort_order');
    }

    public function dean(): HasOne
    {
        return $this->hasOne(FacultyDean::class);
    }

    public function stats(): HasMany
    {
        return $this->hasMany(FacultyStat::class)->orderBy('sort_order');
    }

    public function highlights(): HasMany
    {
        return $this->hasMany(FacultyHighlight::class)->orderBy('sort_order');
    }

    public function events(): HasMany
    {
        return $this->hasMany(FacultyEvent::class)->orderBy('event_date');
    }

    protected function name(): Attribute
    {
        return Attribute::make(
            get: fn () => app()->getLocale() === 'ar' ? $this->name_ar : $this->name_en,
        );
    }
}
```

```php
// app/Models/FacultyTab.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class FacultyTab extends Model
{
    protected $fillable = [
        'faculty_id', 'tab_id', 'label_ar', 'label_en', 'content_ar', 'content_en', 'sort_order'
    ];

    public function faculty(): BelongsTo
    {
        return $this->belongsTo(Faculty::class);
    }

    protected function label(): Attribute
    {
        return Attribute::make(
            get: fn () => app()->getLocale() === 'ar' ? $this->label_ar : $this->label_en,
        );
    }

    protected function content(): Attribute
    {
        return Attribute::make(
            get: fn () => app()->getLocale() === 'ar' ? $this->content_ar : $this->content_en,
        );
    }
}
```

```php
// app/Models/FacultyDean.php
class FacultyDean extends Model
{
    protected $fillable = [
        'faculty_id', 'name_ar', 'name_en', 'role_ar', 'role_en',
        'image_path', 'message_ar', 'message_en', 'section_label_ar',
        'section_label_en', 'title_prefix_ar', 'title_prefix_en', 'cta_ar', 'cta_en'
    ];

    public function faculty(): BelongsTo
    {
        return $this->belongsTo(Faculty::class);
    }
}
```

```php
// app/Models/FacultyStat.php
class FacultyStat extends Model
{
    protected $fillable = ['faculty_id', 'label_ar', 'label_en', 'value', 'icon_path', 'sort_order'];
    
    public function faculty(): BelongsTo
    {
        return $this->belongsTo(Faculty::class);
    }
}
```

```php
// app/Models/FacultyHighlight.php
class FacultyHighlight extends Model
{
    protected $fillable = ['faculty_id', 'title_ar', 'title_en', 'value', 'link', 'icon_path', 'sort_order'];
    
    public function faculty(): BelongsTo
    {
        return $this->belongsTo(Faculty::class);
    }
}
```

```php
// app/Models/FacultyEvent.php
class FacultyEvent extends Model
{
    protected $fillable = ['faculty_id', 'title_ar', 'title_en', 'event_date', 'description_ar', 'description_en', 'image_path', 'sort_order'];
    
    protected $casts = ['event_date' => 'date'];
    
    public function faculty(): BelongsTo
    {
        return $this->belongsTo(Faculty::class);
    }
}
```

```php
// app/Models/News.php
class News extends Model
{
    protected $fillable = [
        'category_ar', 'category_en', 'title_ar', 'title_en',
        'summary_ar', 'summary_en', 'content_ar', 'content_en',
        'news_date', 'image_path', 'link', 'is_featured', 'is_active', 'sort_order'
    ];

    protected $casts = [
        'news_date' => 'date',
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
    ];

    protected function title(): Attribute
    {
        return Attribute::make(
            get: fn () => app()->getLocale() === 'ar' ? $this->title_ar : $this->title_en,
        );
    }
}
```

```php
// app/Models/Announcement.php
class Announcement extends Model
{
    protected $fillable = [
        'title_ar', 'title_en', 'summary_ar', 'summary_en',
        'announcement_date', 'status_ar', 'status_en', 'link', 'type', 'is_active', 'sort_order'
    ];

    protected $casts = [
        'announcement_date' => 'date',
        'is_active' => 'boolean',
    ];
}
```

```php
// app/Models/Event.php
class Event extends Model
{
    protected $fillable = [
        'title_ar', 'title_en', 'event_date', 'date_display_ar', 'date_display_en',
        'info_ar', 'info_en', 'image_path', 'description_ar', 'description_en',
        'link', 'type', 'is_active', 'sort_order'
    ];

    protected $casts = ['event_date' => 'date', 'is_active' => 'boolean'];
}
```

```php
// app/Models/NavigationItem.php
class NavigationItem extends Model
{
    protected $fillable = [
        'parent_id', 'label_ar', 'label_en', 'url', 'page',
        'has_dropdown', 'is_protected', 'sort_order', 'is_active'
    ];

    protected $casts = ['has_dropdown' => 'boolean', 'is_protected' => 'boolean', 'is_active' => 'boolean'];

    public function parent(): BelongsTo
    {
        return $this->belongsTo(NavigationItem::class, 'parent_id');
    }

    public function children(): HasMany
    {
        return $this->hasMany(NavigationItem::class, 'parent_id')->orderBy('sort_order');
    }
}
```

```php
// app/Models/FooterContent.php
class FooterContent extends Model
{
    protected $fillable = ['section_key', 'title_ar', 'title_en', 'content_json', 'sort_order'];
}
```

```php
// app/Models/HeroContent.php
class HeroContent extends Model
{
    protected $fillable = [
        'page', 'title_ar', 'title_en', 'subtitle_ar', 'subtitle_en',
        'images', 'primary_btn_ar', 'primary_btn_en', 'primary_btn_url',
        'secondary_btn_ar', 'secondary_btn_en', 'secondary_btn_url',
        'eyebrow_ar', 'eyebrow_en', 'image', 'links', 'is_active'
    ];

    protected $casts = [
        'images' => 'array',
        'links' => 'array',
        'is_active' => 'boolean',
    ];
}
```

```php
// app/Models/HomeStat.php
class HomeStat extends Model
{
    protected $fillable = [
        'label_ar', 'label_en', 'summary_ar', 'summary_en',
        'value', 'suffix_ar', 'suffix_en', 'svg_path', 'accent', 'glow', 'sort_order'
    ];
}
```

```php
// app/Models/HonorPanelItem.php
class HonorPanelItem extends Model
{
    protected $fillable = [
        'badge_ar', 'badge_en', 'meta_ar', 'meta_en', 'title_ar', 'title_en',
        'summary_ar', 'summary_en', 'highlights_ar', 'highlights_en',
        'image_path', 'link', 'sort_order', 'is_active'
    ];

    protected $casts = [
        'highlights_ar' => 'array',
        'highlights_en' => 'array',
        'is_active' => 'boolean',
    ];
}
```

---

## 5. Controllers & Routes

### 5.1 Web Routes

```php
// routes/web.php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\FacultyController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\LangController;
use Illuminate\Support\Facades\Route;

// Language Switch
Route::get('/lang/{locale}', [LangController::class, 'switch'])->name('lang.switch');

// Home
Route::get('/', [HomeController::class, 'index'])->name('home');

// About
Route::get('/about/', [PageController::class, 'about'])->name('about');
Route::get('/about/vision-mission/', [PageController::class, 'visionMission'])->name('about.vision-mission');
Route::get('/about/history/', [PageController::class, 'history'])->name('about.history');
Route::get('/about/leadership/', [PageController::class, 'leadership'])->name('about.leadership');
Route::get('/about/directorates/', [PageController::class, 'directorates'])->name('about.directorates');
Route::get('/about/partnership/', [PageController::class, 'partnership'])->name('about.partnership');

// Facilities (Faculties)
Route::get('/facilities/', [FacultyController::class, 'index'])->name('faculties');
Route::get('/facilities/{slug}', [FacultyController::class, 'show'])->name('faculty.show');
Route::get('/facilities/{slug}/departments/', [FacultyController::class, 'departments'])->name('faculty.departments');
Route::get('/facilities/{slug}/valedictorians/', [FacultyController::class, 'valedictorians'])->name('faculty.valedictorians');

// Admissions
Route::prefix('admissions')->group(function () {
    Route::get('/', [PageController::class, 'admissions'])->name('admissions');
    Route::get('/requirements/', [PageController::class, 'admissionsRequirements'])->name('admissions.requirements');
    Route::get('/tuition/', [PageController::class, 'admissionsTuition'])->name('admissions.tuition');
    Route::get('/how-to-apply/', [PageController::class, 'howToApply'])->name('admissions.how-to-apply');
    Route::get('/transfer/', [PageController::class, 'admissionsTransfer'])->name('admissions.transfer');
    Route::get('/calendar/', [PageController::class, 'admissionsCalendar'])->name('admissions.calendar');
    Route::get('/documents/', [PageController::class, 'admissionsDocuments'])->name('admissions.documents');
    Route::get('/faq/', [PageController::class, 'admissionsFAQ'])->name('admissions.faq');
});

// News
Route::get('/news/', [NewsController::class, 'index'])->name('news');
Route::get('/news/{id}', [NewsController::class, 'show'])->name('news.show');

// Research
Route::get('/research/', [PageController::class, 'research'])->name('research');

// Campus Life
Route::prefix('campus-life')->group(function () {
    Route::get('/', [PageController::class, 'studentLife'])->name('student-life');
    Route::get('/services/', [PageController::class, 'campusServices'])->name('campus-life.services');
    Route::get('/transport/', [PageController::class, 'transport'])->name('campus-life.transport');
    Route::get('/dental/', [PageController::class, 'dental'])->name('campus-life.dental');
    Route::get('/hospital/', [PageController::class, 'hospital'])->name('campus-life.hospital');
    Route::get('/health-insurance/', [PageController::class, 'healthInsurance'])->name('campus-life.health-insurance');
    Route::get('/clubs-activities/', [PageController::class, 'clubsActivities'])->name('campus-life.clubs-activities');
    Route::get('/career-development/', [PageController::class, 'careerDevelopment'])->name('campus-life.career-development');
});

// Other Pages
Route::get('/virtual-tour/', [PageController::class, 'virtualTour'])->name('virtual-tour');
Route::get('/e-services/', [PageController::class, 'services'])->name('services');
Route::get('/contact/', [ContactController::class, 'index'])->name('contact');
Route::post('/contact/', [ContactController::class, 'submit'])->name('contact.submit');

// API Routes (Hybrid Phase)
Route::prefix('api/spu')->group(function () {
    Route::get('/navigation', [Api\SpuDataController::class, 'navigation']);
    Route::get('/footer', [Api\SpuDataController::class, 'footer']);
    Route::get('/home', [Api\SpuDataController::class, 'home']);
    Route::get('/faculties', [Api\SpuDataController::class, 'faculties']);
    Route::get('/faculty/{slug}', [Api\SpuDataController::class, 'faculty']);
    Route::get('/news', [Api\SpuDataController::class, 'news']);
    Route::get('/events', [Api\SpuDataController::class, 'events']);
});
```

### 5.2 Controllers

```php
// app/Http/Controllers/HomeController.php
namespace App\Http\Controllers;

use App\Models\HeroContent;
use App\Models\HomeStat;
use App\Models\HonorPanelItem;
use App\Models\Faculty;
use App\Models\News;
use App\Models\Event;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $locale = app()->getLocale();
        
        return view('pages.home.index', [
            'currentPage' => 'home',
            'locale' => $locale,
            'isRtl' => $locale === 'ar',
            'hero' => HeroContent::where('page', 'home')->where('is_active', true)->first(),
            'stats' => HomeStat::orderBy('sort_order')->get(),
            'honorPanel' => HonorPanelItem::where('is_active', true)->orderBy('sort_order')->get(),
            'faculties' => Faculty::with(['tabs', 'stats'])->where('is_active', true)->orderBy('sort_order')->get(),
            'news' => News::where('is_active', true)->orderBy('news_date', 'desc')->take(4)->get(),
            'events' => Event::where('is_active', true)->orderBy('event_date')->take(3)->get(),
        ]);
    }
}
```

```php
// app/Http/Controllers/FacultyController.php
namespace App\Http\Controllers;

use App\Models\Faculty;
use Illuminate\Http\Request;

class FacultyController extends Controller
{
    public function index()
    {
        $locale = app()->getLocale();
        
        return view('pages.faculties.index', [
            'currentPage' => 'faculties',
            'locale' => $locale,
            'isRtl' => $locale === 'ar',
            'faculties' => Faculty::with(['tabs', 'dean', 'stats', 'highlights'])
                ->where('is_active', true)
                ->orderBy('sort_order')
                ->get(),
        ]);
    }

    public function show(string $slug)
    {
        $locale = app()->getLocale();
        
        $faculty = Faculty::where('slug', $slug)
            ->with(['tabs', 'dean', 'stats', 'highlights', 'events'])
            ->firstOrFail();
        
        return view('pages.faculties.show', [
            'currentPage' => 'faculties',
            'locale' => $locale,
            'isRtl' => $locale === 'ar',
            'faculty' => $faculty,
        ]);
    }

    public function departments(string $slug)
    {
        $faculty = Faculty::where('slug', $slug)->firstOrFail();
        return view('pages.faculties.departments', ['faculty' => $faculty]);
    }

    public function valedictorians(string $slug)
    {
        $faculty = Faculty::where('slug', $slug)->firstOrFail();
        return view('pages.honor-list.index', ['faculty' => $faculty]);
    }
}
```

```php
// app/Http/Controllers/NewsController.php
namespace App\Http\Controllers;

use App\Models\News;
use App\Models\Announcement;
use App\Models\Event;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index()
    {
        $locale = app()->getLocale();
        
        return view('pages.news.index', [
            'currentPage' => 'news',
            'locale' => $locale,
            'isRtl' => $locale === 'ar',
            'featured' => News::where('is_featured', true)->where('is_active', true)->first(),
            'latestNews' => News::where('is_active', true)->orderBy('news_date', 'desc')->get(),
            'announcements' => Announcement::where('is_active', true)->orderBy('announcement_date', 'desc')->get(),
            'events' => Event::where('is_active', true)->orderBy('event_date')->take(3)->get(),
        ]);
    }

    public function show(int $id)
    {
        $news = News::findOrFail($id);
        return view('pages.news.show', ['news' => $news, 'locale' => app()->getLocale()]);
    }
}
```

```php
// app/Http/Controllers/PageController.php
namespace App\Http\Controllers;

use App\Models\HeroContent;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function about()
    {
        return view('pages.about.index', [
            'currentPage' => 'about',
            'locale' => app()->getLocale(),
            'isRtl' => app()->getLocale() === 'ar',
        ]);
    }

    public function visionMission()
    {
        return view('pages.about.vision-mission', [
            'currentPage' => 'about',
            'locale' => app()->getLocale(),
            'isRtl' => app()->getLocale() === 'ar',
        ]);
    }

    public function history()
    {
        return view('pages.about.history', [
            'currentPage' => 'about',
            'locale' => app()->getLocale(),
            'isRtl' => app()->getLocale() === 'ar',
        ]);
    }

    // ... similar methods for other about pages

    public function admissions()
    {
        return view('pages.admissions.index', [
            'currentPage' => 'admissions',
            'locale' => app()->getLocale(),
            'isRtl' => app()->getLocale() === 'ar',
        ]);
    }

    // ... similar methods for other admission pages

    public function research()
    {
        return view('pages.research.index', [
            'currentPage' => 'research',
            'locale' => app()->getLocale(),
            'isRtl' => app()->getLocale() === 'ar',
        ]);
    }

    public function studentLife()
    {
        return view('pages.student-life.index', [
            'currentPage' => 'campus-life',
            'locale' => app()->getLocale(),
            'isRtl' => app()->getLocale() === 'ar',
        ]);
    }

    // ... similar methods for other pages
}
```

```php
// app/Http/Controllers/Api/SpuDataController.php
namespace App\Http\Controllers\Api;

use App\Models\NavigationItem;
use App\Models\FooterContent;
use App\Models\HeroContent;
use App\Models\Faculty;
use App\Models\News;
use App\Models\Event;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SpuDataController extends Controller
{
    public function navigation()
    {
        $locale = app()->getLocale();
        $items = NavigationItem::where('is_active', true)
            ->whereNull('parent_id')
            ->with('children')
            ->orderBy('sort_order')
            ->get();
        
        return response()->json([
            'menuItems' => $items->map(fn($item) => [
                'id' => $item->id,
                'label_ar' => $item->label_ar,
                'label_en' => $item->label_en,
                'url' => $item->url,
                'page' => $item->page,
                'hasDropdown' => $item->has_dropdown,
                'children' => $item->children->map(fn($child) => [
                    'label_ar' => $child->label_ar,
                    'label_en' => $child->label_en,
                    'url' => $child->url,
                    'protected' => $child->is_protected,
                ]),
            ]),
            'applyUrl' => '/admissions/',
        ]);
    }

    public function footer()
    {
        $sections = FooterContent::orderBy('sort_order')->get();
        return response()->json($sections);
    }

    public function home()
    {
        $locale = app()->getLocale();
        
        return response()->json([
            'hero' => HeroContent::where('page', 'home')->where('is_active', true)->first(),
            'stats' => \App\Models\HomeStat::orderBy('sort_order')->get(),
            'honorPanel' => \App\Models\HonorPanelItem::where('is_active', true)->orderBy('sort_order')->get(),
            'faculties' => Faculty::with(['tabs', 'stats'])->where('is_active', true)->orderBy('sort_order')->get(),
            'news' => News::where('is_active', true)->orderBy('news_date', 'desc')->take(4)->get(),
            'events' => Event::where('is_active', true)->orderBy('event_date')->take(3)->get(),
        ]);
    }

    public function faculties()
    {
        return response()->json([
            'list' => Faculty::with(['tabs', 'dean', 'stats', 'highlights'])
                ->where('is_active', true)
                ->orderBy('sort_order')
                ->get(),
        ]);
    }

    public function faculty(string $slug)
    {
        $faculty = Faculty::where('slug', $slug)
            ->with(['tabs', 'dean', 'stats', 'highlights', 'events'])
            ->firstOrFail();
        
        return response()->json($faculty);
    }

    public function news()
    {
        return response()->json([
            'featured' => News::where('is_featured', true)->where('is_active', true)->first(),
            'latest' => News::where('is_active', true)->orderBy('news_date', 'desc')->get(),
            'announcements' => \App\Models\Announcement::where('is_active', true)->orderBy('announcement_date', 'desc')->get(),
            'events' => Event::where('is_active', true)->orderBy('event_date')->take(3)->get(),
        ]);
    }
}
```

---

## 6. Views & Components

### 6.1 Main Layout

```blade
{{-- resources/views/layouts/spu.blade.php --}}
<!DOCTYPE html>
<html lang="{{ $locale }}" dir="{{ $isRtl ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Syrian Private University')</title>
    <meta name="description" content="@yield('description', 'SPU Official Website')">
    
    {{-- Vite Assets --}}
    @vite(['resources/spu-frontend/src/main.js'])
    
    {{-- Custom Styles --}}
    @stack('styles')
</head>
<body data-page="{{ $currentPage ?? 'home' }}">
    {{-- Header --}}
    @include('spu::components.navigation')
    
    {{-- Main Content --}}
    <main data-page-content>
        @yield('content')
    </main>
    
    {{-- Footer --}}
    @include('spu::components.footer')
    
    {{-- Scripts --}}
    @stack('scripts')
</body>
</html>
```

### 6.2 Navigation Component

```blade
{{-- resources/views/components/spu/navigation.blade.php --}}
<header id="site-header" class="absolute top-0 z-50 w-full pt-3 font-hacen">
    <div class="container">
        {{-- Emergency Notice --}}
        @if($emergencyNotice?->active)
            <a href="{{ $emergencyNotice->url }}" class="mb-2 flex rounded-[10px] bg-spu-red px-4 py-2 text-sm font-bold text-white">
                {{ $locale === 'ar' ? $emergencyNotice->title_ar : $emergencyNotice->title_en }}
            </a>
        @endif
        
        <div class="site-nav-shell">
            {{-- Brand --}}
            <a href="/" class="site-nav-brand">
                <img src="/images/logo-spu.png" alt="SPU Logo" class="w-[11rem]">
            </a>
            
            {{-- Desktop Nav --}}
            <nav class="hidden flex-1 justify-center 2xl:flex" aria-label="Primary navigation">
                <ul class="site-nav-list">
                    @foreach($navigation as $item)
                        <li class="site-nav-item">
                            <a href="{{ $item['url'] }}" 
                               class="site-nav-link {{ $item['page'] === $currentPage ? 'site-nav-link--active' : '' }}">
                                {{ $locale === 'ar' ? $item['label_ar'] : $item['label_en'] }}
                                @if($item['has_dropdown'])
                                    <img src="/images/icon-chevron-down-outline.svg" class="site-nav-link__chevron" alt="Expand">
                                @endif
                            </a>
                            
                            @if($item['has_dropdown'] && $item['children'])
                                <div class="site-nav-dropdown">
                                    @foreach($item['children'] as $child)
                                        <a href="{{ $child['url'] }}" class="site-nav-dropdown-link">
                                            {{ $locale === 'ar' ? $child['label_ar'] : $child['label_en'] }}
                                        </a>
                                    @endforeach
                                </div>
                            @endif
                        </li>
                    @endforeach
                </ul>
            </nav>
            
            {{-- Actions --}}
            <div class="site-nav-actions">
                {{-- Search --}}
                <button type="button" @click="searchOpen = !searchOpen" class="site-nav-lang">
                    <img src="/images/icon-search-outline.svg" alt="Search" class="h-[1rem] w-[1rem]">
                </button>
                
                {{-- Language Switch --}}
                <a href="{{ route('lang.switch', ['locale' => $locale === 'ar' ? 'en' : 'ar']) }}" class="site-nav-lang">
                    {{ $locale === 'ar' ? 'English' : 'العربية' }}
                </a>
                
                {{-- Apply Button --}}
                <a href="/admissions/" class="hidden items-center gap-2 rounded-full bg-spu-red px-5 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-white 2xl:inline-flex">
                    {{ $locale === 'ar' ? 'قدّم الآن' : 'Apply Now' }}
                </a>
            </div>
        </div>
    </div>
</header>
```

### 6.3 Footer Component

```blade
{{-- resources/views/components/spu/footer.blade.php --}}
<footer class="bg-spu-blue text-white font-hacen">
    <div class="container py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {{-- Identity --}}
            <div>
                <h3 class="text-xl font-bold mb-4">
                    {{ $locale === 'ar' ? 'الجامعة السورية الخاصة' : 'SYRIAN PRIVATE UNIVERSITY' }}
                </h3>
                <p class="text-white/70 mb-4">
                    {{ $locale === 'ar' 
                        ? 'ملتزمون بتعزيز التميز الأكاديمي والقيادة العالمية من قلب دمشق.' 
                        : 'Committed to fostering academic excellence and global leadership from the heart of Damascus.' }}
                </p>
                <div class="flex gap-4">
                    <a href="https://spu.edu.sy/" class="hover:opacity-80"><img src="/images/icon-globe-outline.svg" alt="Website"></a>
                    <a href="https://telegram.me/SPUchannel" class="hover:opacity-80"><img src="/images/icon-telegram-outline.svg" alt="Telegram"></a>
                    <a href="https://www.facebook.com/SPUpage.sy" class="hover:opacity-80"><img src="/images/icon-facebook-outline.svg" alt="Facebook"></a>
                    <a href="https://www.instagram.com/spu_syrian_private_university" class="hover:opacity-80"><img src="/images/icon-instagram-outline.svg" alt="Instagram"></a>
                    <a href="https://www.youtube.com/channel/UCaoshcqsl9_fx7WVYgEZI5A" class="hover:opacity-80"><img src="/images/icon-youtube-outline.svg" alt="YouTube"></a>
                </div>
            </div>
            
            {{-- Resources --}}
            <div>
                <h4 class="text-lg font-bold mb-4">
                    {{ $locale === 'ar' ? 'استكشف SPU' : 'EXPLORE SPU' }}
                </h4>
                <ul class="space-y-2">
                    <li><a href="/about/" class="hover:text-spu-gold">{{ $locale === 'ar' ? 'عن الجامعة' : 'About SPU' }}</a></li>
                    <li><a href="/facilities/" class="hover:text-spu-gold">{{ $locale === 'ar' ? 'المرافق' : 'Facilities' }}</a></li>
                    <li><a href="/admissions/" class="hover:text-spu-gold">{{ $locale === 'ar' ? 'القبول والتسجيل' : 'Admissions' }}</a></li>
                    <li><a href="/research/" class="hover:text-spu-gold">{{ $locale === 'ar' ? 'البحث العلمي' : 'Research' }}</a></li>
                    <li><a href="/campus-life/" class="hover:text-spu-gold">{{ $locale === 'ar' ? 'الحياة الجامعية' : 'Campus Life' }}</a></li>
                </ul>
            </div>
            
            {{-- Contact --}}
            <div>
                <h4 class="text-lg font-bold mb-4">
                    {{ $locale === 'ar' ? 'التواصل' : 'CONTACT' }}
                </h4>
                <address class="not-italic text-white/70 space-y-2">
                    <p>مقر الجامعة الرئيسي، أوتوستراد درعا الدولي، بعد بلدة الكسوة، خيارة دنون، دمشق.</p>
                    <p>+963 11 9860</p>
                    <p>info@spu.edu.sy</p>
                </address>
            </div>
            
            {{-- Location --}}
            <div>
                <h4 class="text-lg font-bold mb-4">
                    {{ $locale === 'ar' ? 'الموقع' : 'LOCATION' }}
                </h4>
                <div class="aspect-video rounded-lg overflow-hidden">
                    <iframe src="https://www.google.com/maps/embed?pb=..." class="w-full h-full" loading="lazy"></iframe>
                </div>
            </div>
        </div>
        
        {{-- Bottom --}}
        <div class="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-white/50 text-sm">
                © 2026 Syrian Private University. Excellence in Education.
            </p>
            <div class="flex gap-6 text-sm">
                <a href="/privacy" class="hover:text-white">{{ $locale === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy' }}</a>
                <a href="/cookies" class="hover:text-white">{{ $locale === 'ar' ? 'سياسة ملفات الارتباط' : 'Cookie Policy' }}</a>
                <a href="/sitemap.xml" class="hover:text-white">{{ $locale === 'ar' ? 'خريطة الموقع' : 'Sitemap' }}</a>
            </div>
        </div>
    </div>
</footer>
```

### 6.4 Page View Structure

```blade
{{-- resources/views/pages/home/index.blade.php --}}
@extends('layouts.spu')

@section('title', 'Syrian Private University | Official Website')

@section('description', 'SPU offers accredited faculties, admissions guidance, research, student life, and official campus updates from Damascus.')

@section('content')
    {{-- Hero Section --}}
    @include('spu::pages.home.hero', ['hero' => $hero])
    
    {{-- Stats Section --}}
    @include('spu::pages.home.stats', ['stats' => $stats])
    
    {{-- Honor Panel --}}
    @include('spu::pages.home.honor-panel', ['items' => $honorPanel])
    
    {{-- Faculties Overview --}}
    @include('spu::pages.home.faculties', ['faculties' => $faculties])
    
    {{-- Research Highlights --}}
    @include('spu::pages.home.research')
    
    {{-- Latest News --}}
    @include('spu::pages.home.news', ['news' => $news])
    
    {{-- Events --}}
    @include('spu::pages.home.events', ['events' => $events])
    
    {{-- Healthcare --}}
    @include('spu::pages.home.healthcare')
@endsection

@push('styles')
<link rel="stylesheet" href="/css/home-sections.css">
@endpush

@push('scripts')
<script>
    // Any Alpine.js remaining for specific interactions
</script>
@endpush
```

---

## 7. Hybrid Migration Strategy

### Phase 0: Quick Integration (Week 1-2)

**Goal**: Get frontend running in Laravel immediately with minimal changes.

```
1. Copy frontend files to resources/spu-frontend/
2. Update vite.config.js to build to public/build
3. Create a single Blade wrapper view
4. Wire up routes to serve the Vite-built app
```

**vite.config.js**:

```javascript
import { defineConfig } from 'vite';
import laravel from 'vite-plugin-laravel';

export default defineConfig({
    root: 'resources/spu-frontend',
    build: {
        outDir: '../../public/build',
        emptyOutDir: true,
    },
    plugins: [laravel()],
});
```

**Layout Blade (Hybrid)**:

```blade
{{-- resources/views/spu-app.blade.php --}}
<!DOCTYPE html>
<html lang="{{ session('locale', 'ar') }}">
<head>
    <meta charset="UTF-8">
    @vite(['resources/spu-frontend/src/main.js'])
</head>
<body>
    <div id="app"></div>
</body>
</html>
```

**Route**:

```php
Route::get('/', fn () => view('spu-app'));
```

---

### Phase 1: Blade Layout + Alpine Data (Week 3-4)

**Goal**: Create Blade layout (header/footer) while Alpine still handles page content.

1. Create `layouts/spu.blade.php` with header/footer
2. Create API endpoints for data
3. Modify Alpine stores to fetch from API
4. Pages still use Alpine fragments, but shell is Blade

**API Controller** serves all data:

```php
Route::get('/api/spu/navigation', [SpuDataController::class, 'navigation']);
Route::get('/api/spu/footer', [SpuDataController::class, 'footer']);
Route::get('/api/spu/home', [SpuDataController::class, 'home']);
```

**Alpine store modified to fetch from API**:

```javascript
Alpine.store('navigation', {
    menuItems: [],
    emergencyNotice: {},
    applyUrl: '/admissions/',
    async load() {
        const response = await fetch('/api/spu/navigation');
        const data = await response.json();
        this.menuItems = data.menuItems;
        this.applyUrl = data.applyUrl;
    }
});
```

---

### Phase 2: Replace Fragments with Blade (Week 5-8)

**Goal**: Convert HTML fragments to Blade views one by one.

**Conversion Pattern**:

| Alpine Fragment | Blade View |
|----------------|-------------|
| `hero.html` | `resources/views/spu/pages/home/hero.blade.php` |
| `stats.html` | `resources/views/spu/pages/home/stats.blade.php` |
| `news.html` | `resources/views/spu/pages/home/news.blade.php` |

**Hybrid Page (Alpine + Blade)**:

```blade
{{-- resources/views/pages/home/index.blade.php --}}
@extends('layouts.spu')

@section('content')
    {{-- Static Blade header (no Alpine) --}}
    @include('spu::components.header')
    
    {{-- Alpine component for interactive parts --}}
    <section x-data="heroCarousel()">
        <template x-for="(img, idx) in images">
            <img :src="img">
        </template>
    </section>
    
    {{-- Static Blade content --}}
    @include('spu::pages.home.stats', ['stats' => $stats])
    
    {{-- Static Blade footer --}}
    @include('spu::components.footer')
@endsection
```

---

### Phase 3: Full Blade Conversion (Week 9-12)

**Goal**: Remove Alpine.js from pages, use pure Blade with minimal JS for interactivity.

**Full Blade Home Page**:

```blade
@extends('layouts.spu')

@section('content')
    @include('spu::pages.home.hero', ['hero' => $hero])
    @include('spu::pages.home.stats', ['stats' => $stats])
    @include('spu::pages.home.honor-panel', ['items' => $honorPanel])
    @include('spu::pages.home.faculties', ['faculties' => $faculties])
    @include('spu::pages.home.news', ['news' => $news])
    @include('spu::pages.home.events', ['events' => $events])
    @include('spu::pages.home.healthcare', ['healthcare' => $healthcare])
@endsection
```

---

## 8. Fragment-to-View Conversion Map

### Layout Fragments

| Original Fragment | Blade Component | Notes |
|------------------|-----------------|-------|
| `fragments/layout/header.html` | `components/spu/navigation.blade.php` | Full nav with dropdowns |
| `fragments/layout/footer.html` | `components/spu/footer.blade.php` | Full footer |

### Home Page Fragments

| Original Fragment | Blade View | Controller Data |
|------------------|-------------|-----------------|
| `pages/home/hero.html` | `pages/home/hero.blade.php` | `HeroContent::where('page', 'home')` |
| `pages/home/stats.html` | `pages/home/stats.blade.php` | `HomeStat::all()` |
| `pages/home/honor-panel.html` | `pages/home/honor-panel.blade.php` | `HonorPanelItem::all()` |
| `pages/home/faculties.html` | `pages/home/faculties.blade.php` | `Faculty::with('tabs')->get()` |
| `pages/home/paths.html` | `pages/home/paths.blade.php` | Static content |
| `pages/home/research.html` | `pages/home/research.blade.php` | Research content |
| `pages/home/news.html` | `pages/home/news.blade.php` | `News::latest()->take(4)` |
| `pages/home/events.html` | `pages/home/events.blade.php` | `Event::upcoming()->take(3)` |
| `pages/home/healthcare.html` | `pages/home/healthcare.blade.php` | Healthcare content |

### Faculty Page Fragments

| Original Fragment | Blade View | Notes |
|------------------|-------------|-------|
| `pages/faculties/catalog-hero.html` | `pages/faculties/catalog-hero.blade.php` | Catalog listing hero |
| `pages/faculties/catalog-facts.html` | `pages/faculties/catalog-facts.blade.php` | Faculty facts grid |
| `pages/faculties/catalog-model.html` | `pages/faculties/catalog-model.blade.php` | Catalog card model |
| `pages/faculties/hero.html` | `pages/faculties/partials/hero.blade.php` | Single faculty hero |
| `pages/faculties/content.html` | `pages/faculties/partials/content.blade.php` | Tabbed content + gallery |
| `pages/faculties/dean.html` | `pages/faculties/partials/dean.blade.php` | Dean message section |
| `pages/faculties/stats.html` | `pages/faculties/partials/stats.blade.php` | Faculty stats |
| `pages/faculties/highlights.html` | `pages/faculties/partials/highlights.blade.php` | Highlights grid |
| `pages/faculties/labs.html` | `pages/faculties/labs.blade.php` | Lab showcase |
| `pages/faculties/departments.html` | `pages/faculties/departments.blade.php` | Department listing |

### News Page Fragments

| Original Fragment | Blade View |
|------------------|-------------|
| `pages/news/hero.html` | `pages/news/hero.blade.php` |
| `pages/news/featured.html` | `pages/news/featured.blade.php` |
| `pages/news/last-news.html` | `pages/news/last-news.blade.php` |
| `pages/news/announcements.html` | `pages/news/announcements.blade.php` |
| `pages/news/events.html` | (part of featured or separate) |
| `pages/news/explore.html` | `pages/news/explore.blade.php` |
| `pages/news/archive.html` | `pages/news/archive.blade.php` |

### About Page Fragments

| Original Fragment | Blade View |
|------------------|-------------|
| `pages/about/overview.html` | `pages/about/overview.blade.php` |
| `pages/about/navigation.html` | (use shared nav) |
| `pages/about/vision-mission/content.html` | `pages/about/vision-mission.blade.php` |
| `pages/about/history/content.html` | `pages/about/history.blade.php` |
| `pages/about/leadership/content.html` | `pages/about/leadership.blade.php` |
| `pages/about/directorates/content.html` | `pages/about/directorates.blade.php` |
| `pages/about/directorates/detail.html` | `pages/about/directorates/detail.blade.php` |
| `pages/about/partnership/content.html` | `pages/about/partnership.blade.php` |

### Admission Page Fragments

| Original Fragment | Blade View |
|------------------|-------------|
| `pages/admissions/hero.html` | `pages/admissions/hero.blade.php` |
| `pages/admissions/process.html` | `pages/admissions/process.blade.php` |
| `pages/admissions/requirements.html` | `pages/admissions/requirements.blade.php` |
| `pages/admissions/navigation.html` | (shared sub-nav) |
| `pages/admissions/tuition/content.html` | `pages/admissions/tuition.blade.php` |
| `pages/admissions/faq/content.html` | `pages/admissions/faq.blade.php` |
| `pages/admissions/how-to-apply/content.html` | `pages/admissions/how-to-apply.blade.php` |
| `pages/admissions/transfer/content.html` | `pages/admissions/transfer.blade.php` |
| `pages/admissions/calendar/content.html` | `pages/admissions/calendar.blade.php` |
| `pages/admissions/documents/content.html` | `pages/admissions/documents.blade.php` |

### Student Life Page Fragments

| Original Fragment | Blade View |
|------------------|-------------|
| `pages/student-life/hero.html` | `pages/student-life/hero.blade.php` |
| `pages/student-life/stats.html` | `pages/student-life/stats.blade.php` |
| `pages/student-life/features.html` | `pages/student-life/features.blade.php` |
| `pages/student-life/services.html` | `pages/student-life/services.blade.php` |
| `pages/student-life/gallery.html` | `pages/student-life/gallery.blade.php` |
| `pages/student-life/portals.html` | `pages/student-life/portals.blade.php` |
| `pages/student-life/cta.html` | `pages/student-life/cta.blade.php` |

### Other Page Fragments

| Original Fragment | Blade View |
|------------------|-------------|
| `pages/contact/hero.html` | `pages/contact/hero.blade.php` |
| `pages/contact/content.html` | `pages/contact/content.blade.php` |
| `pages/contact/map.html` | `pages/contact/map.blade.php` |
| `pages/research/hero.html` | `pages/research/hero.blade.php` |
| `pages/research/priorities.html` | `pages/research/priorities.blade.php` |
| `pages/research/initiatives.html` | `pages/research/initiatives.blade.php` |
| `pages/virtual-tour/hero.html` | `pages/virtual-tour/hero.blade.php` |
| `pages/virtual-tour/tour.html` | `pages/virtual-tour/tour.blade.php` |
| `pages/virtual-tour/highlights.html` | `pages/virtual-tour/highlights.blade.php` |
| `pages/virtual-tour/facilities.html` | `pages/virtual-tour/facilities.blade.php` |
| `pages/services/gateway-hero.html` | `pages/services/gateway-hero.blade.php` |
| `pages/services/digital-services.html` | `pages/services/digital-services.blade.php` |
| `pages/services/support-info.html` | `pages/services/support-info.blade.php` |
| `pages/honor-list/hero.html` | `pages/honor-list/hero.blade.php` |
| `pages/honor-list/content.html` | `pages/honor-list/content.blade.php` |

---

## 9. API Design

### Endpoints

| Method | Endpoint | Description | Response |
|--------|----------|-------------|----------|
| GET | `/api/spu/navigation` | Navigation menu items | `{ menuItems: [], applyUrl }` |
| GET | `/api/spu/footer` | Footer content | `{ sections: [] }` |
| GET | `/api/spu/home` | Home page data | `{ hero, stats, honorPanel, faculties, news, events }` |
| GET | `/api/spu/faculties` | All faculties list | `{ list: [] }` |
| GET | `/api/spu/faculty/{slug}` | Single faculty | Faculty object |
| GET | `/api/spu/news` | News data | `{ featured, latest, announcements, events }` |
| GET | `/api/spu/events` | All events | `{ events: [] }` |

### Response Format

All responses use bilingual format with `_ar` and `_en` suffixes:

```json
// GET /api/spu/faculties/medicine
{
    "id": "uuid",
    "slug": "medicine",
    "name_ar": "كلية الطب البشري",
    "name_en": "Faculty of Medicine",
    "catalog_desc_ar": "النهوض بالرعاية الصحية...",
    "catalog_desc_en": "Advancing healthcare...",
    "logo_path": "/images/tip.png",
    "color_hex": "#bc2428",
    "hero_image": "/images/slider-2.webp",
    "tabs": [
        {
            "tab_id": "overview",
            "label_ar": "لمحة عن الكلية",
            "label_en": "Overview",
            "content_ar": "تعد كلية الطب...",
            "content_en": "The Faculty of Medicine..."
        }
    ],
    "dean": {
        "name_ar": "أ.د. أيمن علي",
        "name_en": "Dr. Ayman Ali",
        "role_ar": "عميد كلية الطب البشري",
        "role_en": "Dean of the Faculty",
        "image_path": "/images/medicine-dean.jpg",
        "message_ar": "نعمل على إعداد خريجين...",
        "message_en": "We work to prepare graduates..."
    },
    "stats": [
        { "label_ar": "ابحاث علمية", "label_en": "Scientific Research", "value": "+2500" }
    ],
    "highlights": [
        { "title_ar": "أبحاث علمية", "title_en": "Scientific Research", "value": "+2500" }
    ],
    "events": [
        {
            "title_ar": "مؤتمر طبي دولي...",
            "title_en": "International Conference...",
            "event_date": "2026-05-15",
            "description_ar": "يستضيف قسم الجراحة...",
            "description_en": "The Surgery Department hosts..."
        }
    ]
}
```

---

## 10. Bilingual Content Strategy

### Language Detection

```php
// In AppServiceProvider or Middleware
app()->setLocale(session('locale', 'ar'));
```

### Helper Class

```php
// app/Helpers/Bilingual.php
namespace App\Helpers;

class Bilingual
{
    public static function get(Model $model, string $attribute): ?string
    {
        $locale = app()->getLocale();
        $key = $attribute . '_' . $locale;
        
        return $model->{$key} ?? $model->{$attribute . '_en'} ?? null;
    }
    
    public static function getArray(array $data, string $key): ?string
    {
        $locale = app()->getLocale();
        return $data[$key . '_' . $locale] ?? $data[$key . '_en'] ?? null;
    }
}
```

### Blade Usage

```blade
{{-- Simple attribute --}}
{{ Bilingual::get($faculty, 'name') }}

{{-- Or inline --}}
{{ $locale === 'ar' ? $faculty->name_ar : $faculty->name_en }}

{{-- With fallback --}}
{{ $faculty->name_ar ?? $faculty->name_en }}

{{-- From array --}}
{{ $locale === 'ar' ? $item['label_ar'] : $item['label_en'] }}
```

---

## 11. Alpine.js to Blade Conversion

### Directive Mapping

| Alpine Directive | Blade/HTML Equivalent |
|-----------------|----------------------|
| `x-data="{ activeTab: 'overview' }"` | Keep as Alpine or use `x-data` with props |
| `x-for="item in items"` | `@foreach($items as $item)` or keep Alpine |
| `x-show="condition"` | `:style="'display: ' . ($condition ? 'block' : 'none')"` or keep Alpine |
| `x-text="expr"` | `{{ expression }}` or keep Alpine |
| `:attribute="expr"` | `:attribute="expr"` (Alpine binding) |
| `@click="handler"` | `@click("handler")` (Alpine) |
| `$store.app.currentLang` | `app()->getLocale()` in PHP |

### Conversion Examples

**Tabs Component (Alpine → Blade/Alpine Hybrid)**

Alpine:

```html
<template x-for="tab in $store.facultiesPage.currentFaculty?.tabs">
    <button @click="activeTab = tab.id" x-text="tab.labelAr"></button>
</template>
```

Blade/Alpine:

```blade
@foreach($faculty->tabs as $tab)
    <button 
        @click="activeTab = '{{ $tab->tab_id }}'"
        :class="activeTab === '{{ $tab->tab_id }}' ? 'active' : ''">
        {{ $tab->label_ar }}
    </button>
@endforeach

<script>
    Alpine.data('facultyTabs', () => ({
        activeTab: 'overview',
        tabs: {{ $faculty->tabs->toJson() }}
    }));
</script>
```

**Image Gallery (Alpine → Blade)**

Alpine:

```html
<template x-for="(img, idx) in galleryImages" :key="idx">
    <img :src="img" :class="currentSlide === idx ? 'active' : ''">
</template>
```

Blade (static):

```blade
@foreach($faculty->images as $idx => $image)
    <img src="{{ $image }}" class="{{ $idx === 0 ? 'active' : '' }}">
@endforeach
```

---

## 12. Page-by-Page Conversion Plan

### 12.1 Priority Order

| Priority | Page | Rationale |
|----------|------|-----------|
| 1 | Home (`/`) | Most visited, lots of data to migrate |
| 2 | Faculties (`/facilities/`) | Complex, used as reference |
| 3 | News (`/news/`) | Frequent updates, good test case |
| 4 | About (`/about/`) | Static content, straightforward |
| 5 | Admissions (`/admissions/`) | Important for users |
| 6 | Student Life (`/campus-life/`) | Substantial content |
| 7 | Contact (`/contact/`) | Form handling needed |
| 8 | Research (`/research/`) | Medium complexity |
| 9 | Others | Less traffic, can be later |

### 12.2 Page Route Mapping (60+ Pages)

| Route | Blade View | Controller |
|-------|-----------|------------|
| `/` | `pages/home/index.blade.php` | `HomeController@index` |
| `/about/` | `pages/about/index.blade.php` | `PageController@about` |
| `/about/vision-mission/` | `pages/about/vision-mission.blade.php` | `PageController@visionMission` |
| `/about/history/` | `pages/about/history.blade.php` | `PageController@history` |
| `/about/leadership/` | `pages/about/leadership.blade.php` | `PageController@leadership` |
| `/about/directorates/` | `pages/about/directorates.blade.php` | `PageController@directorates` |
| `/about/directorates/scientific-research/` | `pages/about/directorates/scientific-research.blade.php` | `PageController@directorateDetail` |
| `/about/directorates/student-affairs/` | `pages/about/directorates/student-affairs.blade.php` | `PageController@directorateDetail` |
| `/about/directorates/it-services/` | `pages/about/directorates/it-services.blade.php` | `PageController@directorateDetail` |
| `/about/directorates/public-relations/` | `pages/about/directorates/public-relations.blade.php` | `PageController@directorateDetail` |
| `/about/partnership/` | `pages/about/partnership.blade.php` | `PageController@partnership` |
| `/facilities/` | `pages/faculties/index.blade.php` | `FacultyController@index` |
| `/facilities/medicine/departments/` | `pages/faculties/departments.blade.php` | `FacultyController@departments` |
| `/facilities/medicine/valedictorians/` | `pages/honor-list/index.blade.php` | `FacultyController@valedictorians` |
| `/facilities/dentistry/departments/` | `pages/faculties/departments.blade.php` | `FacultyController@departments` |
| `/facilities/dentistry/labs/` | `pages/faculties/labs.blade.php` | `FacultyController@labs` |
| `/facilities/dentistry/valedictorians/` | `pages/honor-list/index.blade.php` | `FacultyController@valedictorians` |
| `/facilities/pharmacy/departments/` | `pages/faculties/departments.blade.php` | `FacultyController@departments` |
| `/facilities/pharmacy/valedictorians/` | `pages/honor-list/index.blade.php` | `FacultyController@valedictorians` |
| `/facilities/artificial-intelligence/departments/` | `pages/faculties/departments.blade.php` | `FacultyController@departments` |
| `/facilities/artificial-intelligence/valedictorians/` | `pages/honor-list/index.blade.php` | `FacultyController@valedictorians` |
| `/facilities/building-construction-engineering/departments/` | `pages/faculties/departments.blade.php` | `FacultyController@departments` |
| `/facilities/building-construction-engineering/valedictorians/` | `pages/honor-list/index.blade.php` | `FacultyController@valedictorians` |
| `/facilities/petroleum/departments/` | `pages/faculties/departments.blade.php` | `FacultyController@departments` |
| `/facilities/petroleum/valedictorians/` | `pages/honor-list/index.blade.php` | `FacultyController@valedictorians` |
| `/facilities/business-administration/departments/` | `pages/faculties/departments.blade.php` | `FacultyController@departments` |
| `/facilities/business-administration/valedictorians/` | `pages/honor-list/index.blade.php` | `FacultyController@valedictorians` |
| `/admissions/` | `pages/admissions/index.blade.php` | `PageController@admissions` |
| `/admissions/requirements/` | `pages/admissions/requirements.blade.php` | `PageController@admissionsRequirements` |
| `/admissions/tuition/` | `pages/admissions/tuition.blade.php` | `PageController@admissionsTuition` |
| `/admissions/faq/` | `pages/admissions/faq.blade.php` | `PageController@admissionsFAQ` |
| `/admissions/how-to-apply/` | `pages/admissions/how-to-apply.blade.php` | `PageController@howToApply` |
| `/admissions/transfer/` | `pages/admissions/transfer.blade.php` | `PageController@admissionsTransfer` |
| `/admissions/calendar/` | `pages/admissions/calendar.blade.php` | `PageController@admissionsCalendar` |
| `/admissions/documents/` | `pages/admissions/documents.blade.php` | `PageController@admissionsDocuments` |
| `/research/` | `pages/research/index.blade.php` | `PageController@research` |
| `/campus-life/` | `pages/student-life/index.blade.php` | `PageController@studentLife` |
| `/campus-life/services/` | `pages/student-life/campus-services.blade.php` | `PageController@campusServices` |
| `/campus-life/transport/` | `pages/student-life/transport.blade.php` | `PageController@transport` |
| `/campus-life/dental/` | `pages/student-life/dental.blade.php` | `PageController@dental` |
| `/campus-life/hospital/` | `pages/student-life/hospital.blade.php` | `PageController@hospital` |
| `/campus-life/health-insurance/` | `pages/student-life/health-insurance.blade.php` | `PageController@healthInsurance` |
| `/campus-life/clubs-activities/` | `pages/student-life/clubs-activities.blade.php` | `PageController@clubsActivities` |
| `/campus-life/career-development/` | `pages/student-life/career-development.blade.php` | `PageController@careerDevelopment` |
| `/virtual-tour/` | `pages/virtual-tour/index.blade.php` | `PageController@virtualTour` |
| `/e-services/` | `pages/services/index.blade.php` | `PageController@services` |
| `/news/` | `pages/news/index.blade.php` | `NewsController@index` |
| `/contact/` | `pages/contact/index.blade.php` | `ContactController@index` |

---

## 13. Implementation Phases

### Phase 1: Database & Foundation (Week 1-2)

- Create 15 migrations
- Create 12+ models with relationships
- Create database seeder from existing JS data
- Test migrations and seeders

### Phase 2: API Layer (Week 2-3)

- Create `SpuDataController` for API endpoints
- Define API routes
- Test API responses match frontend expectations
- Document API response formats

### Phase 3: Blade Layout (Week 3-4)

- Create `layouts/spu.blade.php`
- Convert `header.html` → `components/spu/navigation.blade.php`
- Convert `footer.html` → `components/spu/footer.blade.php`
- Test layout with real content

### Phase 4: Home Page Conversion (Week 4-5)

- Create `pages/home/index.blade.php`
- Convert all home fragments (9 fragments)
- Connect to `HomeController`
- Test with Alpine.js hybrid first

### Phase 5: Faculty Pages (Week 5-7)

- Create `pages/faculties/index.blade.php`
- Create `pages/faculties/show.blade.php`
- Convert faculty fragments (10+ fragments)
- Test faculty catalog and detail pages

### Phase 6: News & About (Week 7-8)

- Convert news page
- Convert about pages (7 pages)
- Convert admission pages (8 pages)

### Phase 7: Remaining Pages (Week 8-10)

- Student life pages
- Contact page with form
- Research page
- Virtual tour
- Services page

### Phase 8: Polishing (Week 10-12)

- Remove remaining Alpine.js where not needed
- Add Filament admin panel
- Final RTL/LTR testing
- Performance optimization

---

## 14. Seed Data Migration

### Seeder Structure

```php
// database/seeders/SpuSeeder.php
namespace Database\Seeders;

use App\Models\Faculty;
use App\Models\FacultyTab;
use App\Models\FacultyDean;
use App\Models\FacultyStat;
use App\Models\FacultyHighlight;
use App\Models\FacultyEvent;
use App\Models\News;
use App\Models\Announcement;
use App\Models\Event;
use App\Models\NavigationItem;
use App\Models\FooterContent;
use App\Models\HeroContent;
use App\Models\HomeStat;
use App\Models\HonorPanelItem;
use Illuminate\Database\Seeder;

class SpuSeeder extends Seeder
{
    public function run(): void
    {
        $this->seedFaculties();
        $this->seedNews();
        $this->seedNavigation();
        $this->seedFooter();
        $this->seedHomeContent();
    }

    private function seedFaculties(): void
    {
        $faculties = [
            [
                'slug' => 'medicine',
                'name_ar' => 'كلية الطب البشري',
                'name_en' => 'Faculty of Medicine',
                // ... from faculties-catalog.js
            ],
            // ... 6 more faculties
        ];

        foreach ($faculties as $facultyData) {
            $tabs = $facultyData['tabs'] ?? [];
            $dean = $facultyData['dean'] ?? [];
            $stats = $facultyData['stats'] ?? [];
            $highlights = $facultyData['highlights']['items'] ?? [];
            $events = $facultyData['events'] ?? [];

            unset($facultyData['tabs'], $facultyData['dean'], 
                  $facultyData['stats'], $facultyData['highlights'], 
                  $facultyData['events']);

            $faculty = Faculty::create($facultyData);

            // Tabs
            foreach ($tabs as $tab) {
                $faculty->tabs()->create($tab);
            }

            // Dean
            if ($dean) {
                $faculty->dean()->create($dean);
            }

            // Stats
            foreach ($stats as $stat) {
                $faculty->stats()->create($stat);
            }

            // Highlights
            foreach ($highlights as $highlight) {
                $faculty->highlights()->create($highlight);
            }

            // Events
            foreach ($events as $event) {
                $faculty->events()->create($event);
            }
        }
    }

    private function seedNews(): void
    {
        $newsItems = [
            [
                'category_ar' => 'البحث العلمي',
                'category_en' => 'Scientific Research',
                'title_ar' => 'طالب في كلية الطب ينشر بحثاً في مجلة عالمية مصنفة Q1',
                'title_en' => 'Faculty of Medicine Student Publishes Research in Q1 Journal',
                // ... from news-content.js
            ],
        ];

        foreach ($newsItems as $news) {
            News::create($news);
        }
    }

    private function seedNavigation(): void
    {
        $items = [
            [
                'label_ar' => 'عن الجامعة',
                'label_en' => 'About',
                'url' => '/about/',
                'page' => 'about',
                'has_dropdown' => true,
                'sort_order' => 1,
                'children' => [
                    ['label_ar' => 'التاريخ والتأسيس', 'label_en' => 'History & Founding', 'url' => '/about/history/'],
                    // ...
                ],
            ],
            // ... more items
        ];

        foreach ($items as $item) {
            $children = $item['children'] ?? [];
            unset($item['children']);
            
            $navItem = NavigationItem::create($item);
            
            foreach ($children as $child) {
                $child['parent_id'] = $navItem->id;
                NavigationItem::create($child);
            }
        }
    }

    private function seedHomeContent(): void
    {
        // Hero
        HeroContent::create([
            'page' => 'home',
            'title_ar' => 'الجامعة السورية الخاصة',
            'title_en' => 'Syrian Private University',
            'subtitle_ar' => 'بيئة أكاديمية حديثة...',
            'subtitle_en' => 'A modern academic environment...',
            'images' => ['/images/slider-1.webp', '/images/slider-2.webp', ...],
            'primary_btn_ar' => 'استكشف الكليات',
            'primary_btn_en' => 'Explore Faculties',
            'primary_btn_url' => '/facilities/',
            'secondary_btn_ar' => 'جولة افتراضية',
            'secondary_btn_en' => 'Virtual Tour',
            'secondary_btn_url' => '/virtual-tour/',
        ]);

        // Stats
        $stats = [
            ['label_ar' => 'عاماً منذ التأسيس', 'label_en' => 'Years Since Founding', 'value' => 20, ...],
            // ... from home-content.js
        ];

        foreach ($stats as $stat) {
            HomeStat::create($stat);
        }

        // Honor Panel
        $honorItems = [
            // ... from home-content.js
        ];

        foreach ($honorItems as $item) {
            HonorPanelItem::create($item);
        }
    }
}
```

---

## Summary Checklist

- [ ] 15 migration files to create
- [ ] 12+ Eloquent models
- [ ] 8 controller methods per page group (Home, Faculty, News, Page, API)
- [ ] 60+ Blade views
- [ ] API routes for hybrid phase
- [ ] Seeder to migrate existing JS data
- [ ] Filament admin panel (after core migration)

---

*End of Report*
